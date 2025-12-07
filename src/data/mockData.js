// src/data/mockData.js

// 1. GESTÃO DE PACIENTES
export const pacientesIniciais = [
  { id: 1, nome: "Ana Silva Souza", idade: 34, cpf: "123.456.789-00", status: "Internado", ultimaConsulta: "24/11/2025", risco: "Alto" },
  { id: 2, nome: "Carlos Eduardo Lima", idade: 45, cpf: "987.654.321-11", status: "Aguardando", ultimaConsulta: "20/11/2025", risco: "Baixo" },
  { id: 3, nome: "Beatriz Gonçalves", idade: 28, cpf: "111.222.333-44", status: "Alta", ultimaConsulta: "15/11/2025", risco: "Médio" },
];

// 2. AGENDAMENTOS
export const agendamentosIniciais = [
  { id: 1, paciente: "Ana Silva Souza", medico: "Dr. Ricardo", tipo: "Telemedicina", data: "Hoje", hora: "09:00", status: "Confirmado", motivo: "Retorno Cardiologia" },
  { id: 2, paciente: "Carlos Eduardo", medico: "Dra. Fernanda", tipo: "Presencial", data: "Amanhã", hora: "14:00", status: "Pendente", motivo: "Dor nas costas" },
];

// 3. ADMINISTRAÇÃO HOSPITALAR (LEITOS)
export const leitosIniciais = [
  { id: 101, setor: "UTI", status: "Ocupado", paciente: "Ana Silva Souza" },
  { id: 102, setor: "UTI", status: "Livre", paciente: null },
  { id: 201, setor: "Enfermaria", status: "Ocupado", paciente: "Roberto Santos" },
  { id: 202, setor: "Enfermaria", status: "Livre", paciente: null },
  { id: 203, setor: "Enfermaria", status: "Manutenção", paciente: null },
];

// 4. SEGURANÇA E COMPLIANCE (LOGS)
export const logsSistema = [
  { id: 1, usuario: "Dr. Ricardo", acao: "Acessou Prontuário - Ana Silva", data: "26/11/2025 10:05", ip: "192.168.1.10" },
  { id: 2, usuario: "Recepcionista Maria", acao: "Cadastrou Paciente - Novo", data: "26/11/2025 09:30", ip: "192.168.1.12" },
  { id: 3, usuario: "Admin", acao: "Gerou Relatório Financeiro", data: "25/11/2025 18:00", ip: "192.168.1.5" },
  { id: 4, usuario: "Sistema", acao: "Backup Automático Realizado", data: "25/11/2025 23:59", ip: "localhost" },
];

// 5. PRONTUÁRIO (Histórico simples)
export const prontuarioMock = {
    1: "24/11/2025: Paciente relata dores leves. Prescrito analgésico.\n10/10/2025: Exames de rotina normais."
};

// 6. GESTÃO DE PROFISSIONAIS (NOVO)
export const profissionaisIniciais = [
  { id: 1, nome: "Dr. Ricardo Ciotto", especialidade: "Cardiologia", crm: "12345-SP", status: "Ativo" },
  { id: 2, nome: "Dra. Fernanda Lima", especialidade: "Pediatria", crm: "67890-SP", status: "Ativo" },
  { id: 3, nome: "Dr. João Silva", especialidade: "Ortopedia", crm: "11223-SP", status: "Férias" },
];

// 7. DADOS FINANCEIROS PARA RELATÓRIOS (NOVO)
export const dadosFinanceiros = [
  { mes: "Jan", faturamento: 120000, despesas: 80000 },
  { mes: "Fev", faturamento: 135000, despesas: 82000 },
  { mes: "Mar", faturamento: 110000, despesas: 75000 },
  { mes: "Abr", faturamento: 160000, despesas: 90000 },
  { mes: "Mai", faturamento: 145000, despesas: 85000 },
];