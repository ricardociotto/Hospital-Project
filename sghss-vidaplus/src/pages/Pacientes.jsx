import React, { useState } from 'react';
import { FaPlus, FaSearch, FaVideo, FaEdit, FaTrash } from 'react-icons/fa';
import { pacientesIniciais } from '../data/mockData';
import './Pacientes.css'; // Já vamos criar esse CSS

const Pacientes = () => {
  const [pacientes, setPacientes] = useState(pacientesIniciais);
  const [busca, setBusca] = useState("");

  // Função para filtrar a lista
  const pacientesFiltrados = pacientes.filter(paciente =>
    paciente.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="pacientes-container">
      {/* Cabeçalho da Página */}
      <div className="page-header">
        <h2>Gestão de Pacientes</h2>
        <button className="btn-primary">
          <FaPlus /> Novo Paciente
        </button>
      </div>

      {/* Barra de Pesquisa */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          placeholder="Buscar paciente por nome..." 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* Tabela de Dados */}
      <div className="table-responsive card">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>CPF</th>
              <th>Status</th>
              <th>Última Consulta</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pacientesFiltrados.map((paciente) => (
              <tr key={paciente.id}>
                <td>
                  <strong>{paciente.nome}</strong>
                  <br />
                  <span className={`badge risco-${paciente.risco.toLowerCase()}`}>
                    Risco {paciente.risco}
                  </span>
                </td>
                <td>{paciente.idade} anos</td>
                <td>{paciente.cpf}</td>
                <td>
                  <span className={`status-dot status-${paciente.status.toLowerCase()}`}></span>
                  {paciente.status}
                </td>
                <td>{paciente.ultimaConsulta}</td>
                <td className="actions-cell">
                  <button className="btn-icon video" title="Telemedicina">
                    <FaVideo />
                  </button>
                  <button className="btn-icon edit" title="Editar">
                    <FaEdit />
                  </button>
                  <button className="btn-icon delete" title="Excluir">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pacientes;