import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Pacientes from './pages/Pacientes';
import Agendamentos from './pages/Agendamentos';
import Internacoes from './pages/Internacoes';
import Auditoria from './pages/Auditoria';
import Profissionais from './pages/Profissionais';
import Relatorios from './pages/Relatorios';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
          <Route path="/internacoes" element={<Internacoes />} />
          <Route path="/auditoria" element={<Auditoria />} />
          <Route path="/profissionais" element={<Profissionais />} />
          <Route path="/relatorios" element={<Relatorios />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
