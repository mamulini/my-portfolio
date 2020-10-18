import styled from 'styled-components/macro';
import { Resizable } from 'react-resizable';

import ResizeIcon from '../../assets/icons/resize-icon.png';

export const WindowContainer = styled.div`
  position: fixed;
  top: ${props => (props.minimize ? 'auto' : '0')};
  left: ${props => (props.minimize ? props.margin : '0')};
  bottom: ${props => (props.minimize ? '-1px' : '0')};
  right: ${props => (props.minimize ? 'auto' : '0')};
  cursor: default;
  z-index: 10;

  .react-draggable {
    transform: ${props => (props.minimize || props.maximize ? 'none !important' : 'translate')};
  }
`;

export const ModalContainer = styled.div`
  font-size: 20px;
  color: var(--lighter-color);
  border-radius: 5px 5px 0 0;
  border: 1px solid #ffffff;
  background-image: linear-gradient(#000024 40%, rgba(25, 2, 36, 0.887));
  overflow: ${props => (props.minimize ? 'hidden' : 'auto')};
  width: 100%;
  height: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${props => (props.minimize ? '41px' : '8%')};
  border-bottom: 1px solid #ffffff;
  font-size: 15px;
  text-align: center;
  padding: 5px;
  cursor: ${props => (props.minimize ? 'default' : 'grab')};
`;

export const ModalTitle = styled.h3`
  margin-left: ${props => (props.minimize ? '0' : '20px')};
  font-size: 20px;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 92%;
  display: ${props => (props.minimize ? 'none' : 'block')};
`;

export const ModalClose = styled.div`
  font-size: 25px;
  cursor: pointer;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: ${props => (props.minimize ? '0' : '10px')};
  cursor: default;
`;

export const ModalMinimize = styled.div`
  font-size: 22px;
  margin-right: 15px;
  cursor: pointer;
`;

export const ModalMaximize = styled.div`
  font-size: 22px;
  margin-right: 15px;
  cursor: pointer;
`;

export const StyledResizable = styled(Resizable)`
  .react-resizable-handle {
    background-image: url(${ResizeIcon}) !important;
    background-size: cover;
    display: ${props => (props.minimize ? 'none !important' : 'inline')};
  }
`;
