import React, { useState } from 'react';
import Window from '../window/window';
import contactsIcon from '../../assets/icons/send-message.png';
import Form from '../form/form';
import Shortcut from '../sidebar-shortcut/sidebar-shortcut';
import { MessageFormContainer } from './send-message.style';

const Message = () => {
  const [hideContacts, setHideContacts] = useState(true);
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(500);
  const [minimize, setMinimize] = useState(false);
  const [maximize, setMaximize] = useState(false);
  // const [x, setX] = useState(300);
  // const [y, setY] = useState(70);
  const margin = '212px';

  return (
    <>
      {hideContacts ? null : (
        <Window
          title="Contact"
          isHidden={hideContacts}
          setIsHidden={setHideContacts}
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
      <Shortcut title="Write to me" icon={contactsIcon} eventHandler={setHideContacts} />

      {/* <div className="contacts" onClick={() => setHideContacts(false)}>
        <div className="about_logo-wrapper">
          <img className="about_logo" src={contactsIcon} />
          <span className="subtitle">Write to me</span>
        </div>
      </div> */}
    </>
  );
};

export default Message;
