// src/data/mockData.js

// --- LISTA DE PACIENTES ---
export const pacientesIniciais = [
  {
    id: 1,
    nome: "Ana Silva Souza",
    idade: 34,
    cpf: "123.456.789-00",
    status: "Internado", 
    ultimaConsulta: "24/11/2025",
    risco: "Alto"
  },
  {
    id: 2,
    nome: "Carlos Eduardo Lima",
    idade: 45,
    cpf: "987.654.321-11",
    status: "Aguardando",
    ultimaConsulta: "20/11/2025",
    risco: "Baixo"
  },
  {
    id: 3,
    nome: "Mariana Oliveira",
    idade: 28,
    cpf: "456.123.789-22",
    status: "Alta",
    ultimaConsulta: "15/11/2025",
    risco: "Médio"
  },
  {
    id: 4,
    nome: "Roberto Santos",
    idade: 62,
    cpf: "789.123.456-33",
    status: "Internado",
    ultimaConsulta: "25/11/2025",
    risco: "Crítico"
  }
];

// --- LISTA DE AGENDAMENTOS ---
export const agendamentosIniciais = [
  {
    id: 1,
    paciente: "Ana Silva Souza",
    medico: "Dr. Ricardo",
    tipo: "Telemedicina",
    data: "Hoje",
    hora: "09:00",
    status: "Confirmado",
    motivo: "Retorno Cardiologia"
  },
  {
    id: 2,
    paciente: "Carlos Eduardo Lima",
    medico: "Dr. Ricardo",
    tipo: "Presencial",
    data: "Hoje",
    hora: "10:30",
    status: "Pendente",
    motivo: "Dor no peito"
  },
  {
    id: 3,
    paciente: "Mariana Oliveira",
    medico: "Dra. Fernanda",
    tipo: "Presencial",
    data: "Hoje",
    hora: "14:00",
    status: "Finalizado",
    motivo: "Exames de Rotina"
  },
  {
    id: 4,
    paciente: "Roberto Santos",
    medico: "Dr. Ricardo",
    tipo: "Telemedicina",
    data: "Hoje",
    hora: "16:00",
    status: "Cancelado",
    motivo: "Acompanhamento"
  }
];