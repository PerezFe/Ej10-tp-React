import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario';
import Noticia from './components/Noticia';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Noticias</h1>
      <hr/>
      <Formulario></Formulario>
      <Noticia></Noticia>
    </div>
  );
}

export default App;
