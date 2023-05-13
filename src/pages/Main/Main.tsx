import Editor from '../../components/Editor/Editor';
import QueryInput from '../../components/QueryInput/QueryInput';
import Response from '../../components/Response/Response';
import './Main.scss';
function Main() {
  return (
    <main className="graphiql_container">
      <QueryInput />
      <Editor />
      <Response />
    </main>
  );
}

export default Main;
