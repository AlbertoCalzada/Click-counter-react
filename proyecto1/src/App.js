import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen de nosotros </h1>
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='primera'
          cargo='Ingeniera de Software'
          empresa='Spotify'
        />
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='segunda'
          cargo='Ingeniera de Software'
          empresa='Amazon'>

        </Testimonio>
      </div>
    </div>
  );
}

export default App;
