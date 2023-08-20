import './App.css'
import Alert from './assets/Components/Alert.jsx'
import Buscador from './assets/Components/Buscador.jsx'
import Formulario from './assets/Components/Formulario.jsx'
import Listado from './assets/Components/Listado.jsx'
import BaseColaboradores from './assets/lista.js'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Listado/>
      <Formulario/>
    </>
  )
}

export default App
