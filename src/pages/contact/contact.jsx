import React from 'react';
import { ContactBlocks, ContactContainer, ContactTitle, BlockWrapper } from './contact.style';
import Form from '../../components/form/form';
import SocialNetwork from '../../components/social-network/social-network.jsx';

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact me</ContactTitle>
      <ContactBlocks>
        <BlockWrapper>
          <SocialNetwork />
        </BlockWrapper>
        <BlockWrapper>
          <Form />
        </BlockWrapper>
      </ContactBlocks>
    </ContactContainer>
  );
};

export default Contact;
