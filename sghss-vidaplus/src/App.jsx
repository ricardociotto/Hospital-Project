import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Pacientes from './pages/Pacientes';
import Agendamentos from './pages/Agendamentos';

// --- IMPORTAÇÕES NOVAS ---
// Certifica-te que criaste estes ficheiros na pasta 'pages'
import Internacoes from './pages/Internacoes';
import Auditoria from './pages/Auditoria';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pública (Login) */}
        <Route path="/" element={<Login />} />

        {/* Rotas Privadas (Com barra lateral) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
          
          {/* --- ROTAS NOVAS --- */}
          <Route path="/internacoes" element={<Internacoes />} />
          <Route path="/auditoria" element={<Auditoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;