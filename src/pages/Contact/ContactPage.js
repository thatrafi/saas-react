import React from 'react';
import Row from 'atoms/row/Row';
import ContactForm from 'organisms/contact/ContactForm';
import InfoRow from 'atoms/row/InfoRow';
import CTA from 'organisms/cta/CTA';
import { withErrorBoundary } from 'molecules/error/withErrorBoundary';

const ContactPage = () => {
  const formHandler = (data) => {
    console.log(data);
  };

  return (
    <Row>
      <InfoRow position="center" title="Get in touch with us">
        <ContactForm onButtonClicked={formHandler} />
      </InfoRow>
      <CTA />
    </Row>
  );
};

export default withErrorBoundary(ContactPage);
