import React from 'react';
import { ContactContent, ContactContainer, ContactTitle, ContactSection } from './contact.style';
import Form from '../../components/form/form';
import SocialNetwork from '../../components/social-network/social-network.jsx';

const Contact = () => (
  <ContactContainer>
    <ContactTitle>Contact me</ContactTitle>
    <ContactContent>
      <ContactSection>
        <SocialNetwork />
      </ContactSection>
      <ContactSection>
        <Form />
      </ContactSection>
    </ContactContent>
  </ContactContainer>
);

export default Contact;
