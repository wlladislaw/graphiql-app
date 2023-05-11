import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword } from '../../firebase';

const SingInForm = () => {
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/main');
  }, [user, loading]);

  const regex = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email')
        .required('This field is required!'),
      password: Yup.string()
        .matches(regex, 'Invalid password')
        .required('A password is required'),
    }),

    onSubmit: (values, { resetForm }) => {
      setEmail(email);
      setPassword(password);
      alert('Your are welcome');
      logInWithEmailAndPassword(email, password);
      resetForm({});
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Sing In</h2>
      <label htmlFor="email">Your email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="krambambulia@.com"
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}
      <label htmlFor="password">Your password</label>
      <input
        id="password"
        name="password"
        type="string"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.password && formik.touched.password ? (
        <div className="error">{formik.errors.password}</div>
      ) : null}
      <button type="submit">Login</button>
      <div className="link">
        Don`t have an account? <Link to="/signUp">Register</Link> now.
      </div>
    </form>
  );
};

export default SingInForm;
