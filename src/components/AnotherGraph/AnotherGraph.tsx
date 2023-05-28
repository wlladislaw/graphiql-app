const altair = require('./assets/altair.png');
const playground = require('./assets/pl4.png');
const graphlib = require('./assets/pl5.png');

export function AnotherGraph() {
  return (
    <div className="another-graph">
      <div className="link-container">
        <a
          className="link"
          href="https://altairgraphql.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={altair} alt="" width={'400px'} height={'400px'} />
        </a>
        <div className="link-text">Altair GraphQL Client</div>
      </div>
      <div className="link-container">
        <a
          className="link"
          href="https://www.apollographql.com/docs/apollo-server/v2/testing/graphql-playground/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={playground} alt="" width={'600px'} height={'600px'} />
        </a>
        <div className="link-text">GraphQL Playground</div>
      </div>
      <div className="link-container">
        <a
          className="link"
          href="https://graphql.org/code/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={graphlib} alt="" width={'400px'} height={'400px'} />
        </a>
        <div className="link-text">GraphQL Code Libraries</div>
      </div>
    </div>
  );
}
