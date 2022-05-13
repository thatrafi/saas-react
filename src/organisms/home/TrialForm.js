import React from 'react';
import Row from 'atoms/row/Row';
import styles from './TrialForm.module.scss';
import FormWithButton from 'molecules/formWithButton/FormWithButton';
import dashboardImg from 'images/dashboard.png';

const TrialForm = (props) => {
  const formHandler = (data) => {
    props.onFormSubmitted(data);
  };
  return (
    <Row label="Trial Form" className="center">
      <div className={styles.TrialFormWrapper}>
        <div className={styles.TrialFormContent}>
          <h1>The Best Software to Grow your Sales and Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat.
          </p>
          <FormWithButton
            type="secondary"
            size="big"
            inputType="email"
            inputPlaceholder="Enter your email here..."
            btnLabel="Get Free Trial"
            onButtonClicked={formHandler}
          />
        </div>
        <img src={dashboardImg} />
      </div>
    </Row>
  );
};

export default React.memo(TrialForm);
