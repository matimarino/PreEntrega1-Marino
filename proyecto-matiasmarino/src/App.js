// App.js

import React from 'react';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      {/* Aquí puedes agregar más componentes según sea necesario */}
    </div>
  );
}

export default App;
