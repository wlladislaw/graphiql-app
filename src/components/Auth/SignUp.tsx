import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from '../../firebase';

const SingInForm = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/main');
  }, [user, loading]);

  const regexPassword = new RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  );
  const regexName = new RegExp(/^[А-ЯЁІЇЄҐ][а-яёіїєґ]{2,}|^[A-Z][a-z]{2,}$/gm);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .matches(regexName, 'Invalid name')
        .required('This field is required!'),
      email: Yup.string()
        .email('Invalid email')
        .required('This field is required!'),
      password: Yup.string()
        .matches(regexPassword, 'Invalid password')
        .required('A password is required'),
    }),

    onSubmit: (values, { resetForm }) => {
      setName(values.name);
      setEmail(values.email);
      setPassword(values.password);
      console.log(console.log(JSON.stringify(values, null, 2)));
      registerWithEmailAndPassword(name, email, password);
      resetForm({});
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Sing Up</h2>
      <label htmlFor="name">Your Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Alex"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.name && formik.touched.name ? (
        <div className="error">{formik.errors.name}</div>
      ) : null}
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
      <button type="submit">Submit</button>
      <div className="link">
        Already have an account? <Link to="/signIn">Login</Link> now.
      </div>
    </form>
  );
};

export default SingInForm;
