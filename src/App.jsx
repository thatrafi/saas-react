import React from 'react';
import Button from './atoms/button/Button';

import './styles/style.css';

const App = () => {
  const isPrimary = true;
  return (
    <div>
      <h1>Hai there</h1>
      <span className="label-gradient">Hello world</span>
      <Button
        label="Submit"
        width="128px"
        height="56px"
        type="submit"
        isPrimary={isPrimary}
        className=""
      />
    </div>
  );
};

export default App;
