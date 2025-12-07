import React, { useState } from 'react';
import { FaPlus, FaSearch, FaVideo, FaEdit, FaTrash } from 'react-icons/fa';
import { pacientesIniciais } from '../data/mockData';
import './Pacientes.css';

const Pacientes = () => {
  const [pacientes, setPacientes] = useState(pacientesIniciais);
  const [busca, setBusca] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  // Estado extra para saber se estamos editando alguém (guarda o ID)
  const [idEditando, setIdEditando] = useState(null);

  const [novoPaciente, setNovoPaciente] = useState({
    nome: '',
    idade: '',
    cpf: '',
    status: 'Aguardando',
    risco: 'Baixo',
    ultimaConsulta: 'Nunca' // Garante que esse campo exista
  });

  // --- FUNÇÕES DE AÇÃO ---

  // 1. TELEMEDICINA: Abre o Google Meet
  const handleVideo = () => {
    window.open('https://meet.google.com/new', '_blank');
  };

  // 2. EXCLUIR: Remove da lista com confirmação
  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este paciente?")) {
      const novaLista = pacientes.filter(paciente => paciente.id !== id);
      setPacientes(novaLista);
    }
  };

  // 3. PREPARAR EDIÇÃO: Preenche o formulário e abre o modal
  const handleEditar = (paciente) => {
    setNovoPaciente(paciente); // Joga os dados do paciente no form
    setIdEditando(paciente.id); // Salva o ID para sabermos quem atualizar
    setShowModal(true); // Abre a janela
  };

  // 4. RESETAR FORMULÁRIO: Para quando clicar em "Novo Paciente"
  const handleNovo = () => {
    setNovoPaciente({ nome: '', idade: '', cpf: '', status: 'Aguardando', risco: 'Baixo', ultimaConsulta: 'Nunca' });
    setIdEditando(null); // Garante que não estamos editando ninguém
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoPaciente({ ...novoPaciente, [name]: value });
  };

  // 5. SALVAR (Serve tanto para Criar quanto para Editar)
  const handleSalvar = (e) => {
    e.preventDefault();
    
    if (idEditando) {
      // --- MODO EDIÇÃO ---
      const listaAtualizada = pacientes.map(p => 
        p.id === idEditando ? { ...novoPaciente, id: idEditando } : p
      );
      setPacientes(listaAtualizada);
      alert("Paciente atualizado com sucesso!");
    } else {
      // --- MODO CRIAÇÃO ---
      const pacienteParaSalvar = {
        id: Date.now(),
        ...novoPaciente
      };
      setPacientes([...pacientes, pacienteParaSalvar]);
      alert("Paciente cadastrado com sucesso!");
    }
    
    setShowModal(false);
  };

  const pacientesFiltrados = pacientes.filter(paciente =>
    paciente.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="pacientes-container">
      <div className="page-header">
        <h2>Gestão de Pacientes</h2>
        {/* Agora chama handleNovo ao invés de apenas setShowModal */}
        <button className="btn-primary" onClick={handleNovo}>
          <FaPlus /> Novo Paciente
        </button>
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          placeholder="Buscar paciente por nome..." 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

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
                  <strong>{paciente.nome}</strong><br />
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
                  {/* Botão Câmera */}
                  <button 
                    className="btn-icon video" 
                    title="Iniciar Telemedicina"
                    onClick={handleVideo}
                  >
                    <FaVideo />
                  </button>

                  {/* Botão Editar */}
                  <button 
                    className="btn-icon edit" 
                    title="Editar Dados"
                    onClick={() => handleEditar(paciente)}
                  >
                    <FaEdit />
                  </button>

                  {/* Botão Excluir */}
                  <button 
                    className="btn-icon delete" 
                    title="Excluir Paciente"
                    onClick={() => handleExcluir(paciente.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{idEditando ? 'Editar Paciente' : 'Cadastrar Novo Paciente'}</h3>
            <form onSubmit={handleSalvar}>
              
              <div className="form-group">
                <label>Nome Completo:</label>
                <input 
                  type="text" name="nome" required 
                  value={novoPaciente.nome} onChange={handleInputChange} 
                />
              </div>

              <div className="form-group" style={{display: 'flex', gap: '10px'}}>
                <div style={{flex: 1}}>
                  <label>Idade:</label>
                  <input 
                    type="number" name="idade" required 
                    value={novoPaciente.idade} onChange={handleInputChange}
                  />
                </div>
                <div style={{flex: 1}}>
                  <label>CPF:</label>
                  <input 
                    type="text" name="cpf" placeholder="000.000.000-00" required 
                    value={novoPaciente.cpf} onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Status:</label>
                <select name="status" value={novoPaciente.status} onChange={handleInputChange}>
                  <option value="Aguardando">Aguardando</option>
                  <option value="Internado">Internado</option>
                  <option value="Alta">Alta</option>
                </select>
              </div>

              <div className="form-group">
                <label>Risco Inicial:</label>
                <select name="risco" value={novoPaciente.risco} onChange={handleInputChange}>
                  <option value="Baixo">Baixo</option>
                  <option value="Médio">Médio</option>
                  <option value="Alto">Alto</option>
                  <option value="Crítico">Crítico</option>
                </select>
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn-save">
                  {idEditando ? 'Salvar Alterações' : 'Cadastrar Paciente'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pacientes;