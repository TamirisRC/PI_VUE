const db = require('../config/db');

// Obter todas as turmas
const getAllTurmas = (callback) => {
    const sql = 'SELECT * FROM turmas';
    db.query(sql, callback);
};

// Obter turma por ID
const getTurmasById = (id, callback) => {
    const sql = 'SELECT * FROM turmas WHERE id = ?';
    db.query(sql, [id], callback);
};

// Criar nova turma
const createTurmas = (turma, callback) => {
    const sql = 'INSERT INTO turmas (nome) VALUES (?)';
    db.query(sql, [turma.nome], callback);
};

// Atualizar turma
const updateTurmas = (id, turma, callback) => {
    const sql = 'UPDATE turmas SET nome = ? WHERE id = ?';
    db.query(sql, [turma.nome, id], callback);
};

// Excluir turma
const deleteTurmas = (id, callback) => {
    const sql = 'DELETE FROM turmas WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    getAllTurmas,
    getTurmasById,
    createTurmas,
    updateTurmas,
    deleteTurmas,
};
