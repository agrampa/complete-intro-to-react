import React from 'react';
import preload from '../data.json';

const Search = () => (
  <div className='search'>
    // transform array of show data into an array of show components == use .map
    {preload.shows.map( (show) => <h3>{show.title}</h3> )}

    // // preformat and print out whatever is in preload
    // <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> // debugging trick to see JSON printout
  </div>
);

export default Search;
