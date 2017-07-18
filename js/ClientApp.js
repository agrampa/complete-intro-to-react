import React from 'react';
import { render } from 'react-dom';
import App from './App'


// this is the place for browser code, not anything used by nodes



const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();


// if hot module replacement is enabled, for this build, module.hot will exist, so you are in development
// any time App changes, call the function again to rerender the whole app
// plugins make it possible for the modules to replace themselves
// React knows how to call the renderApp function multiple times
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}



// Commenting out html/jsx in js files: anything in between {/* */} will be an inline comment

// // moved to App.js for hot module replacement
// const FourOhFour = () => <h1>404</h1>
//
// const App = () => ( // use paren with arrow functions when the first line is a return
//     // need to use "className" bc "class" is a reserved word
//   <BrowserRouter>
//     <div className="app">
//       <Switch>
//         // will render Landing if the exact path is matched, otherwise render nothing
//         <Route exact path="/" component={Landing} />
//         <Route path="/search" component={Search} />
//         // renders when nothing else is matched
//         <Route component={FourOhFour} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );
//

// BrowserRouter fixes routes in search bar instead of having # in url
// Better for SEO
// Switch tells the browser to only render one component, never two or more
// will render in order, starting from the top and moving down until the first match
// otherwise more than one could render at the same time




// HashRouter is a higher-order component -> doesn't render anything out by itself, it will route then you tell it what markup to render
// introduces routing behavior, but doesn't render anything out of it

// import React from 'react';
// import { render } from 'react-dom';
// import { HashRouter, Route } from 'react-router-dom';
// import Landing from './Landing.js';
// import Search from './Search.js';
//
// const App = () => ( // use paren with arrow functions when the first line is a return
//     // need to use "className" bc "class" is a reserved word
//   <HashRouter>
//     <div className="app">
//       // will render Landing if the exact path is matched, otherwise render nothing
//       <Route exact path="/" component={Landing} />
//       <Route path="/search" component={Search} />
//     </div>
//   </HashRouter>
// );
//
// render(<App />, document.getElementById('app'));
//
// // HashRouter is a higher-order component -> doesn't render anything out by itself, it will route then you tell it what markup to render
// // introduces routing behavior, but doesn't render anything out of it
