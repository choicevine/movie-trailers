// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  searchInput?: boolean,
  handleSearchTerm?: Function
};
const Header = (props: Props) => {
  let utilSpace;

  if (props.searchInput) {
    utilSpace = <input type="text" onChange={props.handleSearchTerm} placeholder="search" />;
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }

  return (
    <header>
      <h1>
        <Link to="/">Svideos</Link>
      </h1>
      {utilSpace}
    </header>
  );
};
Header.defaultProps = {
  searchInput: false,
  handleSearchTerm: function noop() {}
};

export default Header;
