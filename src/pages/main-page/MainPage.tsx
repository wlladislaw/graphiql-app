import { NavLink } from 'react-router-dom';
import './MainPage.scss';

const GrafQLLogo = require('../../assets/graphql.svg');

export const MainPage = () => {
  return (
    <div className="main">
      <img src={GrafQLLogo} alt="GrafQLLogo" className="graph-logo" />
      <div className="text-container">
        <p>
          GraphQL is a query language for APIs and a runtime for fulfilling
          those queries with your existing data. GraphQL provides a
        </p>
        <p>
          complete and understandable description of the data in your API, gives
          clients the power to ask for exactly what they need and nothing more,
          makes it easier
        </p>
        <p>to evolve APIs over time, and enables powerful developer tools.</p>
      </div>
      <div className="link">
        <NavLink to="/signIn" style={{ textDecoration: 'none' }}>
          <h1>Sign in</h1>
        </NavLink>
        <NavLink to="/signUp" style={{ textDecoration: 'none' }}>
          <h1>Sign up</h1>
        </NavLink>
      </div>
    </div>
  );
};
