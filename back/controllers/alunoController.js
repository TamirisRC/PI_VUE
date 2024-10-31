const db = require('../config/db');
const alunoModel = require('../models/alunoModel');

exports.createAluno = (req, res) => {
    const { nome, cpf, ra, email } = req.body;
    const sql = 'INSERT INTO alunos (nome, cpf, ra, email) VALUES (?, ?, ?, ?)';
    db.query(sql, [nome, cpf, ra, email], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, nome, email });
    });
};

exports.getAllAlunos = (req, res) => {
    const sql = 'SELECT * FROM alunos';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    });
};

exports.getAlunoById = (req, res) => {
    const sql = 'SELECT * FROM alunos WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result[0]);
    });
};

exports.updateAluno = (req, res) => {
    const { nome, cpf, ra, email } = req.body;
    const sql = 'UPDATE alunos SET nome = ?, cpf = ?, ra = ?, email = ? WHERE id = ?';
    db.query(sql, [nome, cpf, ra, email, req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ id: req.params.id, nome, cpf, ra, email });
    });
};

exports.deleteAluno = (req, res) => {
    const sql = 'DELETE FROM alunos WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(204).send();
    });
};