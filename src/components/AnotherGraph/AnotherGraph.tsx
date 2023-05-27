const altair = require('./assets/altair.png');

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
          <div className="link-text">Altair GraphQL Client</div>
        </a>
      </div>
    </div>
  );
}
