import React from 'react';
import { ContactContent, ContactContainer, ContactTitle, BlockWrapper } from './contact.style';
import Form from '../../components/form/form';
import SocialNetwork from '../../components/social-network/social-network.jsx';

const Contact = () => (
  <ContactContainer>
    <ContactTitle>Contact me</ContactTitle>
    <ContactContent>
      <BlockWrapper>
        <SocialNetwork />
      </BlockWrapper>
      <BlockWrapper className="form">
        <Form />
      </BlockWrapper>
    </ContactContent>
  </ContactContainer>
);

export default Contact;
