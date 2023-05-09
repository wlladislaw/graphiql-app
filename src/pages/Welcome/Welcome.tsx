import { NavLink } from 'react-router-dom';
import './Welcome.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
const GrafQLLogo = require('../../assets/graphql.svg');

export const Welcome = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="welcome">
      <img src={GrafQLLogo} alt="GrafQLLogo" className="graph-logo" />
      <div className="link">
        {!user && (
          <>
            <NavLink to="/signIn" style={{ textDecoration: 'none' }}>
              <h1>Sign in</h1>
            </NavLink>
            <NavLink to="/signUp" style={{ textDecoration: 'none' }}>
              <h1>Sign up</h1>
            </NavLink>
          </>
        )}
        {user && (
          <NavLink to="/main" style={{ textDecoration: 'none' }}>
            <h1>Go to Main Page</h1>
          </NavLink>
        )}
      </div>
      <div className="text-container">
        <p>
          GraphQL is a query language for APIs and a runtime for fulfilling
          those queries with your existing data. GraphQL provides
        </p>
        <p>
          a complete and understandable description of the data in your API,
          gives clients the power to ask for exactly what they need and
        </p>
        <p>
          nothing more, make it easier to evolve APIs over time, and enables
          powerful developer tools.
        </p>
      </div>
    </div>
  );
};
