import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  padding: 20px;
  text-align: center;
`;

export const AboutDescription = styled.div`
  max-width: 650px;
  height: 45vh;
  background: #f5ebd8;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 15px 15px 6px #a13333;

  p {
    color: rgba(25, 2, 36, 0.9);
    font-size: 18px;
    font-weight: bold;
  }
`;
