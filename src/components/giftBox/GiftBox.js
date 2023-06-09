import React, { useState } from 'react';
import './GiftBox.css';

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openGift = () => {
    setIsOpen(true);
  };

  return (
    <div className={`gift-box ${isOpen ? 'open' : ''}`}>
      <button className="gift-button" onClick={openGift}>
        <span className="box-top"></span>
        <span className="box-bottom"></span>
      </button>
      {isOpen && (
        <div className="gift-content">
          <div className="card">
            <h2>Información</h2>
            <p>Contenido de la tarjeta...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftBox;