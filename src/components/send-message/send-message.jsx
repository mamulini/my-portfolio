import React, { useState } from 'react';
import Window from '../window/window';
import contactsIcon from '../../assets/icons/send-message.png';
import Form from '../form/form';
import Shortcut from '../sidebar-shortcut/sidebar-shortcut';
import { MessageFormContainer } from './send-message.style';

const SendMessage = () => {
  const [hideSend, setHideSend] = useState(true);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [minimize, setMinimize] = useState(false);
  const [maximize, setMaximize] = useState(false);

  const margin = 'auto';

  return (
    <>
      {hideSend ? null : (
        <Window
          title="Write me"
          isHidden={hideSend}
          setIsHidden={setHideSend}
          width={width}
          setWidth={setWidth}
          height={height}
          setHeight={setHeight}
          minimize={minimize}
          setMinimize={setMinimize}
          margin={margin}
          maximize={maximize}
          setMaximize={setMaximize}
        >
          <MessageFormContainer>
            <Form />
          </MessageFormContainer>
        </Window>
      )}
      <Shortcut title="Write me" icon={contactsIcon} eventHandler={setHideSend} />

      {/* <div className="contacts" onClick={() => setHideSend(false)}>
        <div className="about_logo-wrapper">
          <img className="about_logo" src={contactsIcon} />
          <span className="subtitle">Write to me</span>
        </div>
      </div> */}
    </>
  );
};

export default SendMessage;
