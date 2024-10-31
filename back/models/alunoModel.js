const db = require('../config/db');

// Obter todos os alunos
const getAllAlunos = (callback) => {
    const sql = 'SELECT * FROM alunos';
    db.query(sql, callback);
};

// Obter aluno por ID
const getAlunoById = (id, callback) => {
    const sql = 'SELECT * FROM alunos WHERE id = ?';
    db.query(sql, [id], callback);
};

// Criar novo aluno
const createAluno = (aluno, callback) => {
    const sql = 'INSERT INTO alunos (nome, cpf, ra, email) VALUES (?, ?, ?, ?)';
    db.query(sql, [aluno.nome, aluno.cpf, aluno.ra, aluno.email], callback);
};

// Atualizar aluno
const updateAluno = (id, aluno, callback) => {
    const sql = 'UPDATE alunos SET nome = ?, cpf = ?, ra = ?, email = ?, WHERE id = ?';
    db.query(sql, [aluno.nome, aluno.cpf, aluno.ra, aluno.email, id], callback);
};

// Excluir aluno
const deleteAluno = (id, callback) => {
    const sql = 'DELETE FROM alunos WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    getAllAlunos,
    getAlunoById,
    createAluno,
    updateAluno,
    deleteAluno,
};
