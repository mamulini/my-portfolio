import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  SocialContainer,
  SocialTitle,
  SocialSubtitle,
  SocialLink,
  SocialLinkContainer
} from './social-network.style';

const SocialNetwork = () => {
  const { t } = useTranslation();

  return (
    <SocialContainer>
      <SocialTitle>{t('social.title')}</SocialTitle>
      <SocialSubtitle>{t('social.subtitle')}</SocialSubtitle>
      <SocialLinkContainer>
        <SocialLink
          href="https://www.facebook.com/david.mamulia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        </SocialLink>
        <SocialLink
          href="https://instagram.com/mamulinni"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'instagram-square']} />
        </SocialLink>
        <SocialLink href="https://github.com/mamulini" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github-square']} />
        </SocialLink>
        <SocialLink href="https://dev.to/mamulini" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'dev']} />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/david-mamulia-157bab128/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </SocialLink>
        <SocialLink href="mailto:mamuliadavit@gmail.com">
          <FontAwesomeIcon icon={['fas', 'at']} />
        </SocialLink>
      </SocialLinkContainer>
    </SocialContainer>
  );
};

export default SocialNetwork;
