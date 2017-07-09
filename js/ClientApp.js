import React from 'react';
import { render } from 'react-dom';

const App = () => ( // use paren with arrow functions when the first line is a return
    // need to use "className" bc "class" is a reserved word
  <div className='landing'>
    <h1>svideo</h1>
    <input type='text' placeholder='Search' />
    <a>or Browse All</a>
  </div>

render(<App />, document.getElementById('app'));
