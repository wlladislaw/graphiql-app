import Editor from '../../components/Editor/Editor';
import QueryInput from '../../components/QueryInput/QueryInput';
import Response from '../../components/Response/Response';
import Schema from '../../components/Schema/Schema';
import { Suspense } from 'react';

import './Main.scss';

function Main() {
  return (
    <main className="graphiql_container">
      <QueryInput />
      <Editor />
      <Response />
      <Suspense fallback={<div>Loading...</div>}>
        <Schema />
      </Suspense>
    </main>
  );
}

export default Main;
