import React from 'react';
import Footer from './molecules/footer/Footer';
import Header from './molecules/header/Header';

import './styles/style.css';
import PricingPage from './pages/Pricing/PricingPage';

const App = () => {
  // const searchHandler = (data) => {
  //   console.log('Search this' + data);
  // };
  // const tabClickedHandler = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Header />
      <PricingPage />
      <Footer />
    </div>
  );
};

export default App;
