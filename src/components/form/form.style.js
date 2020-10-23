import styled from 'styled-components/macro';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  textarea {
    height: 90px;
  }
`;

export const FormTitle = styled.h2`
  padding-bottom: 5px;
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid var(--primary-color);
  color: ${props => (props.window ? '#ffffff' : 'var(--primary-color) ')};

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const FormButton = styled.button`
  align-self: flex-start;
  padding: 10px 20px;
  color: #fff;
  border: 2px solid var(--secondary-color);
  background: var(--secondary-color);
  border-radius: 7px;
  margin-left: 10px;
  font-size: 16px;
  text-transform: uppercase;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  outline: none;

  &:hover {
    color: var(--secondary-color);
    box-shadow: 0 0 40px 40px #fff inset;
    outline: 0;
  }

  &:active {
    transform: scale(0.95);
  }
`;
