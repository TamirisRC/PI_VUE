const db = require('../config/db');

// Obter todos os professores
const getAllProfessor = (callback) => {
    const sql = 'SELECT * FROM professores';
    db.query(sql, callback);
};

// Obter professor por ID
const getProfessorById = (id, callback) => {
    const sql = 'SELECT * FROM professores WHERE id = ?';
    db.query(sql, [id], callback);
};

// Criar novo professor
const createProfessor = (professor, callback) => {
    const sql = 'INSERT INTO professores (email, pass, nome, cpf, role) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [professor.email, professor.pass, professor.nome, professor.cpf, professor.role], callback);
};

// Atualizar professor
const updateProfessor = (id, professor, callback) => {
    const sql = 'UPDATE professores SET email = ?, pass = ?, nome = ?, cpf = ?, role = ?, WHERE id = ?';
    db.query(sql, [professor.email, professor.pass, professor.nome, professor.cpf, professor.role, id], callback);
};

// Excluir professor
const deleteProfessor = (id, callback) => {
    const sql = 'DELETE FROM professores WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    getAllProfessor,
    getProfessorById,
    createProfessor,
    updateProfessor,
    deleteProfessor,
};
