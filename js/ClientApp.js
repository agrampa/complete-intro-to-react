import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing.js';

const App = () => ( // use paren with arrow functions when the first line is a return
    // need to use "className" bc "class" is a reserved word
  <HashRouter>
    <div className="app">
      // will render Landing if the exact path is matched, otherwise render nothing
      <Route exact path="/" component={Landing} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById('app'));

// HashRouter is a higher-order component -> doesn't render anything out by itself, it will route then you tell it what markup to render
// introduces routing behavior, but doesn't render anything out of it
