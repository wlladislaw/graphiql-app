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

export function App() {
  const [user, loading] = useAuthState(auth);

  const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
    if (loading || user === undefined) return <h3>loading...</h3>;
    if (user === null) {
      return <SignIn />;
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
          <Route
            path="/signIn"
            element={loading ? <Navigate to="/main" /> : <SignIn />}
          />
          <Route
            path="/signUp"
            element={loading ? <Navigate to="/main" /> : <SignUp />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
