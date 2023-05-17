import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { palettes } from './palettes';
import Palette from './Palette/palette';

// const palettesData = palettes.map((palette) => (
//   <Palette key={palette.name} paletteData={palette} />
// ));
// console.log(palettesData);

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map((palette) => (
          <Palette key={palette.name} paletteData={palette} />
        ))}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
