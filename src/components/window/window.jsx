import React, { useRef } from 'react';
import Proptypes from 'prop-types';

import Draggable from 'react-draggable';
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalActions,
  ModalClose,
  ModalMinimize,
  ModalMaximize,
  StyledResizable,
  WindowContainer
} from './window.style';

import 'react-resizable/css/styles.css';

const Window = ({
  isHidden,
  setIsHidden,
  title,
  children,
  width,
  height,
  setHeight,
  setWidth,
  minimize,
  setMinimize,
  margin,
  maximize,
  setMaximize
}) => {
  const nodeRef = useRef(null);

  // if (isHidden) {
  //   console.log('isHidden is true');
  //   return null;
  // }

  const minimizeModal = () => {
    setWidth(180);
    setHeight(41);
    setMinimize(true);
    setMaximize(false);
  };

  const maximizeModal = () => {
    if (!minimize && !maximize) {
      setMaximize(true);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    } else {
      setWidth(600);
      setHeight(400);
      setMinimize(false);
      setMaximize(false);
    }
  };

  const closeModal = () => {
    setIsHidden(true);
    setMinimize(false);
    setWidth(600);
    setHeight(400);
    setMaximize(false);
  };

  const ResizeStyle = {
    width: width,
    height: height
  };

  return (
    <WindowContainer maximize={maximize} minimize={minimize} margin={margin}>
      <Draggable
        bounds="parent"
        {...(maximize
          ? { positionOffset: { x: 0, y: 0 } }
          : { defaultPosition: { x: 300, y: 70 } })}
        {...(minimize || maximize ? { disabled: true } : {})}
        cancel={'.react-resizable-handle'}
        handle=".handle"
        nodeRef={nodeRef}
        minimize={minimize}
      >
        <StyledResizable
          {...(minimize || maximize ? { axis: 'none' } : {})}
          width={width}
          height={height}
          minConstraints={[500, 300]}
          // maxConstraints={[Infinity, Infinity]}
          style={ResizeStyle}
          onResize={(e, data) => {
            setWidth(data.size.width);
            setHeight(data.size.height);
          }}
          minimize={minimize}
        >
          <ModalContainer ref={nodeRef} minimize={minimize}>
            <ModalHeader className="handle" minimize={minimize} onDoubleClick={maximizeModal}>
              <h3>{title}</h3>
              <ModalActions>
                <ModalMinimize onClick={minimizeModal}></ModalMinimize>
                <ModalMaximize onClick={maximizeModal}></ModalMaximize>
                <ModalClose onClick={closeModal}>&times;</ModalClose>
              </ModalActions>
            </ModalHeader>
            <ModalContent minimize={minimize}>{children}</ModalContent>
          </ModalContainer>
        </StyledResizable>
      </Draggable>
    </WindowContainer>
  );
};

Window.propTypes = {
  isHidden: Proptypes.bool,
  setIsHidden: Proptypes.func,
  title: Proptypes.string,
  children: Proptypes.element,
  width: Proptypes.any,
  height: Proptypes.any,
  StyledResizable: Proptypes.any,
  setHeight: Proptypes.func,
  setWidth: Proptypes.func,
  minimize: Proptypes.bool,
  setMinimize: Proptypes.func,
  maximize: Proptypes.bool,
  setMaximize: Proptypes.func,
  margin: Proptypes.string,
  x: Proptypes.number,
  setX: Proptypes.func
};

export default Window;
