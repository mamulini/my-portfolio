import React from 'react';
import { useTranslation } from 'react-i18next';

import { ContactContent, ContactContainer, ContactTitle, ContactSection } from './contact.style';
import Form from '../../components/form/form';
import SocialNetwork from '../../components/social-network/social-network.jsx';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <ContactContainer>
      <ContactTitle>{t('contactpage.title')}</ContactTitle>
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
};

export default Contact;
