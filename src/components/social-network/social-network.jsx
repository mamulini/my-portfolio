import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  SocialContainer,
  SocialTitle,
  SocialSubtitle,
  SocialLink,
  SocialLinkContainer
} from './social-network.style';

const SocialNetwork = () => (
  <SocialContainer>
    <SocialTitle>Connect on social</SocialTitle>
    <SocialSubtitle>Feel free to look at my social media accounts</SocialSubtitle>
    <SocialLinkContainer>
      <SocialLink href="https://facebook.com/mamulini" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
      </SocialLink>
      <SocialLink href="https://instagram.com/mamulini" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'instagram-square']} />
      </SocialLink>
      <SocialLink href="https://github.com/mamulini" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'github-square']} />
      </SocialLink>
      <SocialLink href="https://dev.to/mamulini" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'dev']} />
      </SocialLink>
      <SocialLink href="https://linked.in/mamulini" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </SocialLink>
      <SocialLink href="mailto:mamuliadavit@gmail.com">
        <FontAwesomeIcon icon={['fas', 'at']} />
      </SocialLink>
    </SocialLinkContainer>
  </SocialContainer>
);

export default SocialNetwork;
