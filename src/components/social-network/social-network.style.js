import styled from 'styled-components';

export const SocialContainer = styled.div``;

export const SocialTitle = styled.h2`
  padding-bottom: 5px;
  margin-bottom: 15px;
  padding-bottom: 5px;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid black;
`;

export const SocialSubtitle = styled.p`
  padding-top: 10px;
  margin-bottom: 30px;
  font-size: 20px;
`;

export const SocialLink = styled.a`
  padding: 10px;
  font-size: 40px;

  svg:hover {
    transform: scale(1.2);
    color: gray;
  }
`;
