import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';
import Noticia from './components/Noticia';



function App() {
 
  return (
    <div className="App border m-4">
      <h1 className="text-center">Noticias</h1>
      <hr/>
      <Formulario></Formulario>
      <ListaNoticias></ListaNoticias>
    </div>
  );
}

export default App;
