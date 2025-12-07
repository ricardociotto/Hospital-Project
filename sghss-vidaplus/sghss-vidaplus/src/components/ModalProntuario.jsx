import React, { useState } from 'react';
import { FaPrint, FaSave, FaTimes } from 'react-icons/fa';

const ModalProntuario = ({ onClose, pacienteNome }) => {
  const [evolucao, setEvolucao] = useState("");
  const [receita, setReceita] = useState("");

  const handlePrint = () => {
    alert("Gerando PDF da Receita Digital Assinada...");
    // Aqui entraria a lógica real de PDF, para o trabalho o alert basta.
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Prontuário atualizado com sucesso!");
    onClose();
  };

  return (
    <div className="modal-overlay" style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
    }}>
      <div className="modal-content" style={{
        background: 'white', padding: '25px', borderRadius: '8px', width: '600px', maxWidth: '90%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3>Prontuário: {pacienteNome}</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}><FaTimes /></button>
        </div>

        <form onSubmit={handleSave}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Evolução Clínica:</label>
          <textarea 
            rows="5" 
            style={{ width: '100%', marginBottom: '15px', padding: '10px' }}
            placeholder="Descreva os sintomas, diagnóstico e observações..."
            value={evolucao}
            onChange={(e) => setEvolucao(e.target.value)}
            required
          ></textarea>

          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Prescrição Digital:</label>
          <textarea 
            rows="4" 
            style={{ width: '100%', marginBottom: '15px', padding: '10px', fontFamily: 'monospace', background: '#f8f9fa' }}
            placeholder="Digite os medicamentos e posologia..."
            value={receita}
            onChange={(e) => setReceita(e.target.value)}
          ></textarea>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <button type="button" onClick={handlePrint} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '10px', cursor: 'pointer' }}>
              <FaPrint /> Imprimir Receita
            </button>
            <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              <FaSave /> Salvar Atendimento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalProntuario;