import React, { useState } from 'react';
import { FaPlus, FaSearch, FaEdit, FaTrash, FaUserMd } from 'react-icons/fa';
import { profissionaisIniciais } from '../data/mockData';
import './Pacientes.css'; // Podemos reutilizar o CSS de pacientes

const Profissionais = () => {
  const [profissionais, setProfissionais] = useState(profissionaisIniciais);
  const [busca, setBusca] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  const [novoProfissional, setNovoProfissional] = useState({
    nome: '',
    especialidade: '',
    crm: '',
    status: 'Ativo'
  });

  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja remover este profissional?")) {
      setProfissionais(profissionais.filter(p => p.id !== id));
    }
  };

  const handleEditar = (profissional) => {
    setNovoProfissional(profissional);
    setIdEditando(profissional.id);
    setShowModal(true);
  };

  const handleNovo = () => {
    setNovoProfissional({ nome: '', especialidade: '', crm: '', status: 'Ativo' });
    setIdEditando(null);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoProfissional({ ...novoProfissional, [name]: value });
  };

  const handleSalvar = (e) => {
    e.preventDefault();
    if (idEditando) {
      const listaAtualizada = profissionais.map(p => 
        p.id === idEditando ? { ...novoProfissional, id: idEditando } : p
      );
      setProfissionais(listaAtualizada);
      alert("Profissional atualizado!");
    } else {
      const itemSalvar = { id: Date.now(), ...novoProfissional };
      setProfissionais([...profissionais, itemSalvar]);
      alert("Profissional cadastrado!");
    }
    setShowModal(false);
  };

  const filtrados = profissionais.filter(p =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.especialidade.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="pacientes-container">
      <div className="page-header">
        <h2>Gestão de Profissionais</h2>
        <button className="btn-primary" onClick={handleNovo}>
          <FaPlus /> Novo Profissional
        </button>
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          placeholder="Buscar por nome ou especialidade..." 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className="table-responsive card">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Especialidade</th>
              <th>CRM</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((prof) => (
              <tr key={prof.id}>
                <td><FaUserMd style={{marginRight:5}}/> {prof.nome}</td>
                <td>{prof.especialidade}</td>
                <td>{prof.crm}</td>
                <td>
                  <span className={`status-dot ${prof.status === 'Ativo' ? 'status-aguardando' : 'status-alta'}`}></span>
                  {prof.status}
                </td>
                <td className="actions-cell">
                  <button className="btn-icon edit" onClick={() => handleEditar(prof)}>
                    <FaEdit />
                  </button>
                  <button className="btn-icon delete" onClick={() => handleExcluir(prof.id)}>
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
            <h3>{idEditando ? 'Editar Profissional' : 'Novo Profissional'}</h3>
            <form onSubmit={handleSalvar}>
              <div className="form-group">
                <label>Nome:</label>
                <input type="text" name="nome" value={novoProfissional.nome} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Especialidade:</label>
                <input type="text" name="especialidade" value={novoProfissional.especialidade} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>CRM/Registro:</label>
                <input type="text" name="crm" value={novoProfissional.crm} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Status:</label>
                <select name="status" value={novoProfissional.status} onChange={handleInputChange}>
                  <option value="Ativo">Ativo</option>
                  <option value="Férias">Férias</option>
                  <option value="Inativo">Inativo</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>Cancelar</button>
                <button type="submit" className="btn-save">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profissionais;