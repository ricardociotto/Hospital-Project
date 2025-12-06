import React from 'react';
import { dadosFinanceiros } from '../data/mockData';
import { FaChartLine, FaMoneyBillWave, FaFileInvoiceDollar } from 'react-icons/fa';

const Relatorios = () => {
  // Cálculo simples de totais
  const totalFaturamento = dadosFinanceiros.reduce((acc, curr) => acc + curr.faturamento, 0);
  const totalDespesas = dadosFinanceiros.reduce((acc, curr) => acc + curr.despesas, 0);

  // Estilos Inline simples para o gráfico de barras
  const chartContainerStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: '300px',
    padding: '20px',
    background: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #e0e0e0'
  };

  const barStyle = (valor, max) => ({
    width: '40px',
    height: `${(valor / max) * 100}%`,
    backgroundColor: '#007bff',
    textAlign: 'center',
    color: '#fff',
    borderRadius: '4px 4px 0 0',
    transition: 'height 0.5s',
    position: 'relative'
  });

  const maxVal = Math.max(...dadosFinanceiros.map(d => d.faturamento));

  return (
    <div>
      <h2>Relatórios Financeiros e Administrativos</h2>
      
      {/* Cards de Resumo */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div className="card" style={{ borderLeft: '4px solid #28a745' }}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
                <h4>Faturamento Total</h4>
                <h2>R$ {totalFaturamento.toLocaleString()}</h2>
            </div>
            <FaMoneyBillWave size={30} color="#28a745" />
          </div>
        </div>
        <div className="card" style={{ borderLeft: '4px solid #dc3545' }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                    <h4>Despesas Totais</h4>
                    <h2>R$ {totalDespesas.toLocaleString()}</h2>
                </div>
                <FaFileInvoiceDollar size={30} color="#dc3545" />
            </div>
        </div>
        <div className="card" style={{ borderLeft: '4px solid #007bff' }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                    <h4>Lucro Líquido</h4>
                    <h2>R$ {(totalFaturamento - totalDespesas).toLocaleString()}</h2>
                </div>
                <FaChartLine size={30} color="#007bff" />
            </div>
        </div>
      </div>

      {/* Gráfico Visual (CSS Puro) */}
      <div className="card">
        <h3>Evolução do Faturamento (Últimos 5 Meses)</h3>
        <div style={chartContainerStyle}>
          {dadosFinanceiros.map((dado, index) => (
            <div key={index} style={{display:'flex', flexDirection:'column', alignItems:'center', height:'100%', justifyContent:'flex-end'}}>
                <span style={{marginBottom:'5px', fontWeight:'bold', fontSize:'0.8rem'}}>R$ {dado.faturamento/1000}k</span>
                <div style={barStyle(dado.faturamento, maxVal)}></div>
                <span style={{marginTop:'10px', fontWeight:'bold'}}>{dado.mes}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Relatorios;