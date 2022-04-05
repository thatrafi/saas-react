import React from 'react';
import InfoRow from '../../atoms/row/InfoRow';
import TwoColumns from '../../atoms/row/TwoColumns';
import Row from '../../atoms/row/Row';
import graphic1 from '../../images/graphic1.png';
// eslint-disable-next-line no-undef
const images = require.context('../../images', true);
import './InfoGraphic.module.css';

const InfoGraphic = (props) => {
  var image = '';
  try {
    image = images(`./${props.imgSrc}`);
  } catch (error) {
    console.log(error);
  }
  return (
    <Row>
      <TwoColumns>
        <div style={{ order: props.imgPosition === 'left' ? 1 : 0, alignSelf: 'flex-start' }}>
          <InfoRow
            headline={props.headline}
            title={props.title || 'Title Here'}
            subtitle={props.subtitle}>
            {props.content}
          </InfoRow>
        </div>
        <div
          style={{
            order: props.imgPosition === 'left' ? 0 : 1,
            display: 'flex',
            justifyContent: 'center'
          }}>
          <img src={image || graphic1} />
        </div>
      </TwoColumns>
    </Row>
  );
};

export default InfoGraphic;
