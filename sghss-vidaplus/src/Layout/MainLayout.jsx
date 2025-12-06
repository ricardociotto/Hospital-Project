import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// Adicionando FaStethoscope (para médicos) e FaChartBar (para relatórios)
import { 
  FaUserMd, FaUsers, FaCalendarAlt, FaSignOutAlt, 
  FaProcedures, FaShieldAlt, FaStethoscope, FaChartBar 
} from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="layout-container">
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
          
          {/* Link Novo: Profissionais */}
          <Link to="/profissionais" className="nav-item">
            <FaStethoscope size={20} /> Profissionais
          </Link>

          <Link to="/agendamentos" className="nav-item">
            <FaCalendarAlt size={20} /> Agenda
          </Link>
          <Link to="/internacoes" className="nav-item">
            <FaProcedures size={20} /> Internações
          </Link>
          
          {/* Link Novo: Relatórios */}
          <Link to="/relatorios" className="nav-item">
            <FaChartBar size={20} /> Relatórios
          </Link>
          
          <Link to="/auditoria" className="nav-item">
            <FaShieldAlt size={20} /> Segurança
          </Link>
        </nav>
        <div className="logout-section">
          <Link to="/" className="nav-item logout">
            <FaSignOutAlt size={20} /> Sair
          </Link>
        </div>
      </aside>

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