import React from 'react';
import ReactDom from 'react-dom'

const App = () => {
  return (
    <div>
        <h1>Hi there! This is a test.</h1>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));