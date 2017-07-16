import React from 'react';
import ShowCard from './ShowCard.js';
import preload from '../data.json';

const Search = () => (
  <div className="search">
    // // preformat and print out whatever is in preload
    // <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> // debugging trick to see JSON printout

    // transform array of show data into an array of show components == use .map
    // {preload.shows.map( show => <h3>{show.title}</h3> )} // no parens around show, only one param

    {preload.shows.map(show => <ShowCard show={show} />)}
  </div>
);

export default Search;


// use alt+command+period to add closing tag!



// add object spread operator:
// Note: array spread is already in place, object spread is forthcoming
const Search = () => (
  <div className="search">
    {preload.shows.map(show => <ShowCard {...show} />)}
  </div>
);

// now, in showCard....  make changes and they all become top-level items
// use this when you know everything that is in the item
// run into problems when you are passing along data that you don't need to
// for example, the show object has an imdb id which isn't being used, so the spread might not really be a good idea here, would be better if all of the properties are actually being used
