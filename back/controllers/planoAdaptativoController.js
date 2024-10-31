const db = require('../config/db');
const planoAdaptativoModel = require('../models/planoAdaptativoModel');


exports.createPlanos = (req, res) => {
    const { nome, descricao, turma_id, semestre } = req.body;
    const sql = 'INSERT INTO planos (nome, descricao, turma_id, semestre) VALUES (?, ?, ?, ?)';
    db.query(sql, [nome, descricao, turma_id, semestre], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, nome, descricao, turma_id, semestre });
    });
};

exports.getAllPlanos = (req, res) => {
    const sql = 'SELECT * FROM planos';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    });
};

exports.getPlanosById = (req, res) => {
    const sql = 'SELECT * FROM planos WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result[0]);
    });
};

exports.updatePlanos = (req, res) => {
    const { nome, descricao, turma_id, semestre} = req.body;
    const sql = 'UPDATE planos SET nome = ?, descricao = ?, turma_id = ?, semestre = ? WHERE id = ?';
    db.query(sql, [nome, descricao, turma_id, semestre, req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ id: req.params.id, nome, descricao, turma_id, semestre });
    });
};

exports.deletePlanos = (req, res) => {
    const sql = 'DELETE FROM planos WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(204).send();
    });
};