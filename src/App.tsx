import React from 'react';
import { wait } from '@testing-library/user-event/dist/utils';
import './App.css';
import { useQuery } from '@tanstack/react-query';
import IGPost from './components/post/Post';
import data from './data/data.json';

const App = () => {
  const post = data;
  const queryPost = useQuery({
    queryKey: ['post'],
    queryFn: () => wait(2000).then(() => [...post['posts']]),
  });

  if (queryPost.isLoading) {
    return <>Loading...</>;
  }
  if (queryPost.isError) {
    return (
      <pre>
        Error! Something went wrong: {JSON.stringify(queryPost.isError)}
      </pre>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Query Post App</h3>
        <p>TanQuery</p>
      </header>
      <div className="App-content">
        <div className="App-content__list">
          {queryPost?.data?.map((post) => {
            return <IGPost key={post.id} postData={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
