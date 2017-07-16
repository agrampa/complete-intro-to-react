import React from 'react';
import { shape, string } from 'prop-types'; // shape is needed without spread operator
import { string } from 'prop-types'; // not needed with spread operator
import styled from 'styled-components';


const color = '#333';
// backtick syntax: "tagged template literal", valid JS, can write CSS within it, just like you normally would
// creates style tag somewhere on the page, outputs the styling into the style tag, then gives the div a class that matches is so the styling is applied
const Wrapper = styled.div`
  width: 32%;
  border: 2px solid ${color};
  border-radius: 4px;
  overflow: hidden;
`;

// parent can pass data down to the child, but child has no concept of who the parents are => one-way data flow

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
// props is immutable
const ShowCard = props => (
  <Wrapper> // add styling, can keep the className as well
    <img alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper> // add styling
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
// now they are all top level items
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
