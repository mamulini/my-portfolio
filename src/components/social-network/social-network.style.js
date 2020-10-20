import styled from 'styled-components/macro';

export const SocialContainer = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const SocialTitle = styled.h2`
  padding-bottom: 5px;
  margin-bottom: 15px;
  padding-bottom: 5px;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid var(--primary-color);

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const SocialSubtitle = styled.p`
  padding-top: 10px;
  margin-bottom: 30px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const SocialLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 460px) {
    justify-content: space-between;
  }
`;

export const SocialLink = styled.a`
  padding: 10px;
  font-size: 40px;

  @media screen and (max-width: 460px) {
    font-size: 30px;

    padding: 0;
    margin-bottom: 10px;
  }

  svg:hover {
    transform: scale(1.1);
    color: gray;
    color: var(--secondary-color);
    transition: transform 0.5s ease;
  }
`;
