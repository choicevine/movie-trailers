import React from 'react';
import preload from '../data.json';

const Search = () => (
  <div className="search">
    <div>{preload.JSON.stringify()}</div>
  </div>
);

export default Search;
