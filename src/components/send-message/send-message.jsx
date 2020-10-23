import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();

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
      <Shortcut title={t('shortcutMessage.title')} icon={contactsIcon} eventHandler={setHideSend} />
    </>
  );
};

export default SendMessage;
