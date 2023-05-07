import { Routes, Route, NavLink } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import './App.scss';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

export function App() {
  return (
    <div className="welcome_page">
      <div className="link">
        <NavLink to="/signIn">
          <h1>Sign in</h1>
        </NavLink>
        <NavLink to="/signUp">
          <h1>Sign up</h1>
        </NavLink>
      </div>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}
