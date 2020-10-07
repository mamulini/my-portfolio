import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  padding: 20px;
  text-align: center;
`;

export const ContactBlocks = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70vh;
  width: 70vw;
  background: #f5ebd8;
  border-radius: 10px;
  padding: 20px;
  color: rgba(25, 2, 36, 0.9);
`;

export const BlockWrapper = styled.div`
  min-height: 20px;
  /* border-top: 1px solid black; */
  width: 40%;
  margin-top: 10px;
`;
