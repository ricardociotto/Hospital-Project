import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// Adicionei FaProcedures (Leitos) e FaShieldAlt (Segurança)
import { FaUserMd, FaUsers, FaCalendarAlt, FaSignOutAlt, FaProcedures, FaShieldAlt } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="layout-container">
      {/* Barra Lateral */}
      <aside className="sidebar">
        <div className="logo">
          <h2>🏥 VidaPlus</h2>
        </div>
        <nav>
          <Link to="/dashboard" className="nav-item">
            <MdSpaceDashboard size={20} /> Dashboard
          </Link>
          <Link to="/pacientes" className="nav-item">
            <FaUsers size={20} /> Pacientes
          </Link>
          <Link to="/agendamentos" className="nav-item">
            <FaCalendarAlt size={20} /> Agenda
          </Link>
          
          {/* --- NOVOS MÓDULOS --- */}
          <Link to="/internacoes" className="nav-item">
            <FaProcedures size={20} /> Internações
          </Link>
          <Link to="/auditoria" className="nav-item">
            <FaShieldAlt size={20} /> Segurança/Logs
          </Link>
          {/* --------------------- */}

        </nav>
        <div className="logout-section">
          <Link to="/" className="nav-item logout">
            <FaSignOutAlt size={20} /> Sair
          </Link>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="content">
        <header className="top-bar">
          <h3>Sistema de Gestão Hospitalar</h3>
          <div className="user-info">
            <FaUserMd style={{marginRight: '8px'}} />
            Olá, Dr. Ricardo
          </div>
        </header>
        <div className="page-content">
          <Outlet /> 
        </div>
      </main>
    </div>
  );
};

export default MainLayout;