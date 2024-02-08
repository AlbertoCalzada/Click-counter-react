import './App.css';
import logo from './img/counter.png';
import Boton from './components/button';

function App() {
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
    <Boton
    texto={'Click'}
    isButtonClick={true}
    actionClick={}
    
    />

<Boton
    texto={'Reiniciar'}
    isButtonClick={false}
    actionClick={}
    
    />
      </div>
    </div>
  );
}

export default App;
