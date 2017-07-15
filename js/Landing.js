import React from 'react';
import { Link } from 'react-router-dom';

const landing = () => {
  <div className="landing">
    <h1>svideo</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">or Browse All</Link>
  </div>
}

export default Landing;


// Link will generate an anchor tag with the correct url to go to without changing the UI compared to using <a>
