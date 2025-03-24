import './App.css';
import { useState } from 'react';


function App() {
  const lista = ["principal", "fotos", "videos", "contactos"];
  const [parImpar, setParImpar] = useState(true);
  const [color, setColor] = useState("blue");

  const par = (element) => {
    if (element === "par") {
      setParImpar(true);
      setColor("blue");
    } else {
      setParImpar(false);
      setColor("green");
    }
  };

  const listaFiltrada = lista.filter((item, index) => (parImpar ? index % 2 === 0 : index % 2 !== 0));

  return (
    <div className="App">
      <header>
        <h1 style={{color: color}}>Este es el título principal del sitio web</h1>
      </header>
      <nav>
        <ul>
          {listaFiltrada.map ((item, index) => <li key = {index}>{item}</li>)}
        </ul>
      </nav>
      <button onClick={() => par("par")}>Lista par</button>
      <button onClick={() => par("impar")}>Lista impar</button>
    </div>
  )
};

export default App;