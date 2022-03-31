import React from 'react';
import IconLabel from './molecules/iconlabel/IconLabel';
import PricingItem from './molecules/pricing/PricingItem';
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

const App = () => {
  const searchHandler = (data) => {
    console.log('Search this' + data);
  };
  const tabClickedHandler = (data) => {
    console.log(data);
  };
  const pricing = {
    name: 'Regular',
    subName: 'Starter plan',
    features: [
      { name: 'Limited Projects', isAvailable: true },
      { name: 'Regular Support Business', isAvailable: true },
      { name: '1 Month Free Trial', isAvailable: true },
      { name: '3GB Storage', isAvailable: true },
      { name: 'Ads Preview', isAvailable: true }
    ]
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
      <PricingItem
        headerIcon="Icon@1x.png"
        headerTitle={pricing.name}
        headerSubTitle={pricing.subName}
        features={pricing.features}
      />
      <IconLabel />
      <Footer />
    </div>
  );
};

export default App;
