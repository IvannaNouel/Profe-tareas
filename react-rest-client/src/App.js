import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TareasList from "./components/TareasList"
import ActualizarTarea from "./components/ActualizarTarea"
import Mostrar from "./components/mostrar"


function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a><Link to="/" className="navbar-brand">Mostrar Tareas</Link></a>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
                <Link to="/mostrar" className="nav-link">Tareas APP</Link>
              </li>
              <li className="navbar-item">
                <Link to="/actualizar" className="nav-link">Actualizar Tarea</Link>
              </li>
              
            </ul>
          </div>
        </nav>
        <br />
        <Route exact path="/mostrar" component={TareasList} />
        <Route exact path="/actualizar" component={ActualizarTarea} />
        <Route exact path="/" component={Mostrar} />

      </div>
    </Router>
  );
}

export default App;
