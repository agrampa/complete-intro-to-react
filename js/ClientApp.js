import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {

  const style = { color: props.color };

  /////////
  // JSX //
  ////////
  return (  // paren is needed so it keeps reading to the next line
    <div>
      <h1 style={ style }>{ props.title }</h1>
    <div>
  )

  // can also write <h1 style={ { color: props.color } }> instead
}

const MyFirstComponent = function() {
  // paren is not needed here because there is other content after the "return"
  return <div id="my-first-component">
    <MyTitle title = "Game of Thrones" color="YellowGreen" />
    <MyTitle title = "Seinfeld" color="GreenYellow" />
    <MyTitle title = "Stranger Things" color="LimeGreen" />
    <MyTitle title = "Rick & Morty" color="peru" />
  </div>

  // cannot put in another top-level element at the same level as the div, it can only return one element at the top level at a time
  // will be possible in react 16
  // for now, wrap all attributes needed inside of one top-level div 
}

render(<MyFirstComponent />, document.getElementById('app'));
