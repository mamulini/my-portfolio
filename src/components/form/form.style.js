import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  color: black;
  height: 100%;
  textarea {
    height: 100px;
  }
`;

export const FormTitle = styled.h2`
  padding-bottom: 5px;
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid black;
`;

export const FormButton = styled.button`
  width: 100px;
  height: 40px;
  color: red;
  border: 1px solid black;
  margin-top: 20px;
`;
