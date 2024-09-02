// src/App.jsx
import React from 'react';
import Profil from './profil.jsx';

function App() {
  return (
    <div className="App">
      <h1>Pahlawan Indonesia</h1>
      <div className="profil-container">
        <Profil imgSrc="src/assets/soekarno1.jpeg" name="Ir. Soekarno" />
        <Profil imgSrc="src/assets/moh hatta.jpeg" name="Mohammad Hatta" />
        <Profil imgSrc="src/assets/jend sudirman.jpeg" name="Jenderal Soedirman" />
      </div>
    </div>
  );
}

export default App;
