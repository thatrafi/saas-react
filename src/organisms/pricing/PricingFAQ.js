import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'atoms/card/Card';
import Row from 'atoms/row/Row';
import QuestionItem from 'molecules/question/QuestionItem';
import styles from './PricingFAQ.module.scss';

const PricingFAQ = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getQuestions();
  }, []);
  const getQuestions = async () => {
    const { data } = await Promise.resolve(axios.get('/api/pricing/faq'));
    setQuestions(data);
  };
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
              {questions &&
                questions.map((q, key) => (
                  <QuestionItem question={q.question} detail={q.answer} key={key} />
                ))}
            </div>
          </div>
        </Card>
      </div>
    </Row>
  );
};

export default PricingFAQ;
