import styled from 'styled-components/macro';

export const ShortcatContainer = styled.div`
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
  padding: 10px;
  width: 80px;
`;

export const ShortcutTitle = styled.span`
  color: #ffffff;
  font-size: 12px;
`;
