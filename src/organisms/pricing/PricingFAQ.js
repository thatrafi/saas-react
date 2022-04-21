import React from 'react';
import Card from '../../atoms/card/Card';
import Row from '../../atoms/row/Row';
import QuestionItem from '../../molecules/question/QuestionItem';
import styles from './PricingFAQ.module.scss';

const PricingFAQ = () => {
  return (
    <Row label="Pricing FAQ">
      <div className={styles.pricingFAQWrapper}>
        <Card className="faq rounded violet">
          <div className={styles.contentFAQWrapper}>
            <div className={styles.contentTitle}>
              <h2>Frequently Asked Questions</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt.
              </p>
            </div>
            <div className={styles.contentQuestions}>
              <QuestionItem />
              <QuestionItem />
              <QuestionItem />
              <QuestionItem />
              <QuestionItem />
            </div>
          </div>
        </Card>
      </div>
    </Row>
  );
};

export default PricingFAQ;
