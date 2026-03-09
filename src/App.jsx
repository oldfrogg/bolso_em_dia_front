/*
Telas: 
Login, 
Home (opção de add transação, mostrar período atual, mostrar períodos anteriores), 
Tela de criação/edição de transação,
Lista de períodos
Lista de transações em um período
*/

import { Routes, Route } from 'react-router-dom'
import './App.css';

import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import MeusPeriodos from './pages/MeusPeriodos/MeusPeriodos.jsx'
import CriarEditarTransacao from './pages/CriarEditarTransacao/CriarEditarTransacao.jsx';
import TransacoesPeriodo from './pages/TransacoesPeriodo/TransacoesPeriodo.jsx';
import CriarUsuario from './pages/CriarUsuario/CriarUsuario.jsx';
import EditarUsuario from './pages/EditarUsario/EditarUsuario.jsx';
import TransacoesPeriodoComponente from './componentes/TransacoesPeriodoComponente/TransacoesPeriodoComponente.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />}/> 
        <Route exact path='/login/' element={<Login />} />
        <Route exact path='/home/' element={<Home />} />
        <Route exact path='/meus_periodos/' element={<MeusPeriodos />} />
        <Route exact path='/criar_editar_transacao/:id?/' element={<CriarEditarTransacao />} />
        <Route exact path='/transacoes_periodo/' element={<TransacoesPeriodo />}></Route>
        <Route exact path='/transacoes_periodo_componente/' element={<TransacoesPeriodoComponente />}></Route>
        <Route exact path='/criar_usuario/' element={<CriarUsuario />}></Route>
        <Route exact path='/editar_usuario/' element={<EditarUsuario />}></Route>
      </Routes>
    </>
  );
}

export default App;
