import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import './App.scss';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

import { Welcome } from './pages/Welcome/Welcome';
import { Header } from './components/Header/Header';

export function App() {
  return (
    <>
      <Header />
      <div className="welcome_page">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
