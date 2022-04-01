import React from 'react';
import IconLabel from './molecules/iconlabel/IconLabel';
import Card from './atoms/card/Card';
import CircleCard from './atoms/card/CircleCard';
import Icon from './atoms/icon/Icon';
import Logo from './atoms/logo/Logo';
import Footer from './molecules/footer/Footer';
import Header from './molecules/header/Header';
import QuestionItem from './molecules/question/QuestionItem';
import SearchBar from './molecules/searchBar/SearchBar';
import TabAction from './molecules/tabAction/TabAction';

import './styles/style.css';
import PricingPage from './pages/Pricing/PricingPage';

const App = () => {
  const searchHandler = (data) => {
    console.log('Search this' + data);
  };
  const tabClickedHandler = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Hai there</h1>
      <Header />
      <span className="label-gradient">Hello world</span>
      <SearchBar onSearchClicked={searchHandler} />
      <Card className="row pink feature">
        <p>Hello world</p>
        <p>Hello 2</p>
      </Card>
      <Icon src="IconMessenger@1x.png" />
      <CircleCard className="primary medium">A</CircleCard>
      <Logo src="Logo_1.png" />
      <TabAction tabs={['Monthly', 'Yearly']} onTabClicked={tabClickedHandler} />
      <QuestionItem />
      <IconLabel />
      <Footer />
      <PricingPage />
    </div>
  );
};

export default App;
