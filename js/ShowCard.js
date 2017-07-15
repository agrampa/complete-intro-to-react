import React from 'react';

const ShowCard = props => (
  <div className="show-card">
    <img alt={`${props.show.title} Show Poster`} src={`/public/img/posters/${props.show.poster}`} />
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.year})</h4>
      <p>{props.show.description}</p>
    </div>
  </div>
);

export default ShowCard;


// given a set of props, determine how the component will look
// call it a billion times, on the billion-and-first time it is called, it will look the same as every other time it was called with the same parameters

// for something like a date, don't read it from the render method, read it from the props
