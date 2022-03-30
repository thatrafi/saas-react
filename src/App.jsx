import React from 'react';
import Card from './atoms/card/Card';
import CircleCard from './atoms/card/CircleCard';
import Icon from './atoms/icon/Icon';
import Logo from './atoms/logo/Logo';
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
      <Card className="card row pink small">
        <p>Hello world</p>
        <p>Hello 2</p>
      </Card>
      <Icon src="IconMessenger@1x.png" />
      <CircleCard className="primary medium">A</CircleCard>
      <Logo src="Logo_1.png" />
    </div>
  );
};

export default App;
