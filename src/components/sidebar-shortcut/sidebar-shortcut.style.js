import styled from 'styled-components/macro';

export const ShortcatContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  text-align: center;

  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const ShortcutIconWrapper = styled.div`
  width: 50px;
`;

export const ShortcutTitle = styled.span`
  margin-top: -10px;
  font-size: 12px;
`;
