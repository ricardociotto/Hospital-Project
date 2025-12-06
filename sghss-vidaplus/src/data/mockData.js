// src/data/mockData.js

// ... (Mantenha os arrays pacientesIniciais e agendamentosIniciais que já tens) ...

export const pacientesIniciais = [
  // ... teus pacientes aqui ...
  { id: 1, nome: "Ana Silva Souza", idade: 34, cpf: "123.456.789-00", status: "Internado", ultimaConsulta: "24/11/2025", risco: "Alto" },
  { id: 2, nome: "Carlos Eduardo Lima", idade: 45, cpf: "987.654.321-11", status: "Aguardando", ultimaConsulta: "20/11/2025", risco: "Baixo" },
  // ...
];

export const agendamentosIniciais = [
    // ... teus agendamentos aqui ...
    { id: 1, paciente: "Ana Silva Souza", medico: "Dr. Ricardo", tipo: "Telemedicina", data: "Hoje", hora: "09:00", status: "Confirmado", motivo: "Retorno Cardiologia" },
    // ...
];

// --- NOVOS DADOS PARA OS MÓDULOS FALTANTES ---

// 1. ADMINISTRAÇÃO HOSPITALAR (LEITOS)
export const leitosIniciais = [
  { id: 101, setor: "UTI", status: "Ocupado", paciente: "Ana Silva Souza" },
  { id: 102, setor: "UTI", status: "Livre", paciente: null },
  { id: 201, setor: "Enfermaria", status: "Ocupado", paciente: "Roberto Santos" },
  { id: 202, setor: "Enfermaria", status: "Livre", paciente: null },
  { id: 203, setor: "Enfermaria", status: "Manutenção", paciente: null },
];

// 2. SEGURANÇA E COMPLIANCE (LOGS)
export const logsSistema = [
  { id: 1, usuario: "Dr. Ricardo", acao: "Acessou Prontuário - Ana Silva", data: "26/11/2025 10:05", ip: "192.168.1.10" },
  { id: 2, usuario: "Recepcionista Maria", acao: "Cadastrou Paciente - Novo", data: "26/11/2025 09:30", ip: "192.168.1.12" },
  { id: 3, usuario: "Admin", acao: "Gerou Relatório Financeiro", data: "25/11/2025 18:00", ip: "192.168.1.5" },
  { id: 4, usuario: "Sistema", acao: "Backup Automático Realizado", data: "25/11/2025 23:59", ip: "localhost" },
];

// 3. PRONTUÁRIO (Histórico simples)
export const prontuarioMock = {
    1: "24/11/2025: Paciente relata dores leves. Prescrito analgésico.\n10/10/2025: Exames de rotina normais."
};