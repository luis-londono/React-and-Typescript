import React from 'react';
import ReactDom from 'react-dom'

const App = () => {
  return (
    <div>
        <h1>Hi there!</h1>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));