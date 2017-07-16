import React from 'react';
import { shape, string } from 'prop-types';

// without spread operator
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

// with spread operator
const ShowCard = props => (
  <div className="show-card">
    <img alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </div>
);


// propTypes are not required but makes linter stop complaining
// shape is an object, contain the object of expected data
// without ".isRequired" that item isn't needed, will default to being optional otherwise

// optional props need to be given a default
// ShowCard.defaultProps = {}...

// without spread operator
ShowCard.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
  }).isRequired;
};

// with spread operator added
ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
};

export default ShowCard;


// given a set of props, determine how the component will look
// call it a billion times, on the billion-and-first time it is called, it will look the same as every other time it was called with the same parameters

// for something like a date, don't read it from the render method, read it from the props
