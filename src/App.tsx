import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import './App.scss';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

import { MainPage } from './pages/main-page/MainPage';

export function App() {
  return (
    <>
      <div className="main-page">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
