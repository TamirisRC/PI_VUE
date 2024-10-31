const db = require('../config/db');
const turmaModel = require('../models/turmaModel');

exports.createTurmas = (req, res) => {
    const { nome  } = req.body;
    const sql = 'INSERT INTO turmas (nome) VALUES (?)';
    db.query(sql, [nome], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, nome });
    });
};

exports.getAllTurmas = (req, res) => {
    const sql = 'SELECT * FROM turmas';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    });
};

exports.getTurmasById = (req, res) => {
    const sql = 'SELECT * FROM turmas WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result[0]);
    });
};

exports.updateTurmas = (req, res) => {
    const { nome} = req.body;
    const sql = 'UPDATE turma SET nome = ? WHERE id = ?';
    db.query(sql, [nome, req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ id: req.params.id, nome });
    });
};

exports.deleteTurmas = (req, res) => {
    const sql = 'DELETE FROM turmas WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(204).send();
    });
};