import React from 'react';
import Popup from 'reactjs-popup';
import Forms from '../forms/forms';
// import 'reactjs-popup/dist/index.css';
import './pupup.style.css';

const PopupTest = ({ children, trigger }) => <Popup trigger={trigger}>{children}</Popup>;

export default PopupTest;
