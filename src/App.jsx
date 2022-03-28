import React from 'react';
import Card from './atoms/card/Card';
import SearchBar from './molecules/searchBar/SearchBar';

import './styles/style.css';

const App = () => {
  const searchHandler = (data) => {
    console.log('Search this' + data);
  };
  return (
    <div>
      <h1>Hai there</h1>
      <span className="label-gradient">Hello world</span>
      <SearchBar onSearchClicked={searchHandler} />
      <Card className="card row blue small" />
    </div>
  );
};

export default App;
