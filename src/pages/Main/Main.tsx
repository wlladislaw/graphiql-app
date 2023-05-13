import Editor from '../../components/Editor/Editor';
import QueryInput from '../../components/QueryInput/QueryInput';

function Main() {
  return (
    <main className="graphiql_container">
      <QueryInput />
      <Editor />
      {/*

      editor section component
      response section component (aside)
      query variables section component(inside editor)

      */}
      <h1> Components</h1>
    </main>
  );
}

export default Main;
