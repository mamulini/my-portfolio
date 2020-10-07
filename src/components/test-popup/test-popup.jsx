import React from 'react';
import Popup from 'reactjs-popup';
import './style.css';

const Testpopup = ({ trigger }) => (
  <Popup trigger={trigger} modal>
    {close => (
      <div className="modal">
        <div className="header">
          <h3>About me</h3>
          <button className="close" onClick={close}>
            &times;
          </button>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem,
          repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque,
          explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae
          optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae?
        </div>
      </div>
    )}
  </Popup>
);

export default Testpopup;
