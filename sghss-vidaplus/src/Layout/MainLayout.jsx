import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// Trocamos lucide-react por react-icons (Fa = FontAwesome, Md = MaterialDesign)
import { FaUserMd, FaUsers, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
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