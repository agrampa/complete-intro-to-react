import React from 'react';
import preload from '../data.json';

const Search = () => (
  <div className="search">
    // // preformat and print out whatever is in preload
    // <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> // debugging trick to see JSON printout

    // transform array of show data into an array of show components == use .map
    // {preload.shows.map( show => <h3>{show.title}</h3> )} // no parens around show, only one param

    {preload.shows.map(show => (
      <div className="show-card">
        <img alt={`${show.title} Show Poster`} src={`/public/img/posters/${show.poster}`} />
        <div>
          <h3>{show.title}</h3>
          <h4>({show.year})</h4>
          <p>{show.description}</p>
        </div>
      </div>
    ))}

  </div>
);

export default Search;
