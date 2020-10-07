import styled from 'styled-components';

export const ShortcatContainer = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const ShortcutIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

export const ShortcutTitle = styled.span`
  color: #ffffff;
  font-size: 12px;
`;
