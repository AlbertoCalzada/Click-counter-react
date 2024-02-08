import './App.css';
import logo from './img/counter.png';
import Contador from './components/counter';
import Boton from './components/button';
import { useState } from 'react'; //para actualizar un componente 

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const actionClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logo}
          alt='Logo'
        />
      </div>
      <div className='contenedor'>
        <Contador
          numClicks={numClicks} />
        <Boton
          texto={'Click'}
          isButtonClick={true}
          actionClick={actionClick}

        />

        <Boton
          texto={'Reiniciar'}
          isButtonClick={false}
          actionClick={reiniciarContador}

        />
      </div>
    </div>
  );
}

export default App;
