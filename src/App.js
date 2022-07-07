import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Menu from './layouts/Menu';
import ListaUsuarios from './pages/Usuarios/ListaUsuarios';
import FormUsuarios from './pages/Usuarios/FormUsuarios';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Menu />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/usuarios" element={<ListaUsuarios />} />
              <Route path="/usuarios/novo" element={<FormUsuarios />} />
              <Route path="/usuarios/editar/:id" element={<FormUsuarios />} />
            </Routes> 
          </Container>
        </BrowserRouter>
    </div>
  );
}
export default App;
