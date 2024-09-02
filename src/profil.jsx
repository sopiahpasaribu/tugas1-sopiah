// src/Profil.jsx
import React from 'react';
import './index.css';

function Profil({ imgSrc, name }) {
  return (
    <div className="profil">
      <img src={imgSrc} alt={name} className="profil-image" />
      <h3>{name}</h3>
    </div>
  );
}

export default Profil;
