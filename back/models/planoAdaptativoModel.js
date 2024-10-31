const db = require('../config/db');

// Obter todos os planos adaptativos
const getAllPlanos = (callback) => {
    const sql = 'SELECT * FROM planos';
    db.query(sql, callback);
};

// Obter plano por ID
const getPlanosById = (id, callback) => {
    const sql = 'SELECT * FROM planos WHERE id = ?';
    db.query(sql, [id], callback);
};

// Criar novo plano adaptativo
const createPlanos = (plano, callback) => {
    const sql = 'INSERT INTO planos (nome, descricao, turma_id, semestre) VALUES (?, ?, ?, ?)';
    db.query(sql, [plano.nome, plano.descricao, plano.turma_id, plano.semestre], callback);
};

// Atualizar plano adaptativo
const updatePlanos = (id, plano, callback) => {
    const sql = 'UPDATE planos SET nome = ?, descricao = ?, turma_id = ?, semestre = ?, WHERE id = ?';
    db.query(sql, [plano.nome, plano.descricao, plano.turma_id, plano.semestre, id], callback);
};

// Excluir plano adaptativo
const deletePlanos = (id, callback) => {
    const sql = 'DELETE FROM planos WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    getAllPlanos,
    getPlanosById,
    createPlanos,
    updatePlanos,
    deletePlanos,
};
