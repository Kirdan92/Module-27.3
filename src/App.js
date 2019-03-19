import React from 'react';
import './App.css';

import CommentsListContainer from './CommentsListContainer';
import CommentFormContainer from './CommentFormContainer';



const App = () => {
  return (
    <div className="App">
      <h1 className="main-header">Lista komentarzy:</h1>
      <CommentsListContainer/>
      <CommentFormContainer/>
    </div>
  );
};

export default App;
