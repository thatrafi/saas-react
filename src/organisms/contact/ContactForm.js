import React, { useRef } from 'react';
import Card from 'atoms/card/Card';
import TwoColumns from 'atoms/row/TwoColumns';
import IconLabel from 'molecules/iconlabel/IconLabel';
import Input from 'atoms/input/Input';
import Button from 'atoms/button/Button';
import { contactData } from 'data/contactData';
import styles from './ContactForm.module.scss';
import TextArea from 'atoms/input/TextArea';

const ContactForm = (props) => {
  const inputRef = {
    fullname: useRef(''),
    companyName: useRef(''),
    workEmail: useRef(''),
    subject: useRef(''),
    message: useRef('')
  };
  const btnHandler = (e) => {
    e.preventDefault();
    const formData = {
      fullname: inputRef.fullname.current.value,
      companyName: inputRef.companyName.current.value,
      workEmail: inputRef.workEmail.current.value,
      subject: inputRef.subject.current.value,
      message: inputRef.message.current.value
    };
    props.onButtonClicked(formData);
  };
  return (
    <Card className="full violet rounded">
      <div className={styles.contactForm}>
        <h2>Drop us a message</h2>
        <p>We will get back to you as soon as possible.</p>
        <TwoColumns>
          <div className={styles.formWrapper}>
            <form>
              <div className={styles.formName}>
                <Input
                  type="text"
                  placeholder="Fullname"
                  ref={inputRef.fullname}
                  className={`secondary rounded`}
                />
                <Input
                  type="text"
                  placeholder="Company Name"
                  ref={inputRef.companyName}
                  className={`secondary rounded`}
                />
              </div>
              <Input
                type="email"
                placeholder="Work Email"
                ref={inputRef.workEmail}
                className={`secondary rounded`}
              />
              <Input
                type="text"
                placeholder="Subject"
                ref={inputRef.subject}
                className={`secondary rounded`}
              />
              <TextArea
                placeholder="Message"
                ref={inputRef.message}
                className={`secondary rounded`}
              />
              <Button
                type="submit"
                label="Send"
                className={`primary big rounded`}
                onClick={btnHandler}
              />
            </form>
          </div>
          <div className={styles.contactItems}>
            <div className={styles.items}>
              {Object.keys(contactData).map((key) => (
                <IconLabel
                  key={key}
                  iconSize="medium"
                  iconColor="blue"
                  iconSrc={contactData[key].icon}
                  label={contactData[key].label}
                  subtitle={contactData[key].subtitle}
                />
              ))}
            </div>
          </div>
        </TwoColumns>
      </div>
    </Card>
  );
};

export default ContactForm;
