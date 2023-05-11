import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import './App.scss';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { Welcome } from './pages/Welcome/Welcome';
import { Header } from './components/Header/Header';
import Main from './pages/Main/Main';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { PropsWithChildren } from 'react';
import About from './components/About/About';

export function App() {
  const [user] = useAuthState(auth);
  const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
    if (user === null || user === undefined) {
      return <Navigate to="/" />;
    }
    return <>{children}</>;
  };

  return (
    <>
      <Header />
      <div className="welcome_page">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
