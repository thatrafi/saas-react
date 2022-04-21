import React, { Fragment } from 'react';
import ButtonGuide from '../../organisms/typhography/ButtonGuide';
import ColorPallete from '../../organisms/typhography/ColorPallete';
import TextGuide from '../../organisms/typhography/TextGuide';

const TypographyPage = () => {
  return (
    <Fragment>
      <TextGuide />
      <ColorPallete />
      <ButtonGuide />
    </Fragment>
  );
};

export default TypographyPage;
