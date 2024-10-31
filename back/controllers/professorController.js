const db = require('../config/db');
const professorModel = require('../models/ProfessorModel');


exports.createProfessor = (req, res) => {
    const { email, pass, nome, cpf, role } = req.body;
    const sql = 'INSERT INTO professores (email, pass, nome, cpf, role) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [email, pass, nome, cpf, role], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, email, pass, nome, cpf, role });
    });
};

exports.getAllProfessor = (req, res) => {
    const sql = 'SELECT * FROM professores';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    });
};

exports.getProfessorById = (req, res) => {
    const sql = 'SELECT * FROM professores WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result[0]);
    });
};

exports.updateProfessor = (req, res) => {
    const { email, pass, nome, cpf, role} = req.body;
    const sql = 'UPDATE professores SET email = ?, pass = ?, nome = ?, cpf = ?, role = ? WHERE id = ?';
    db.query(sql, [email, pass, nome, cpf, role, req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ id: req.params.id, email, pass, nome, cpf, role });
    });
};

exports.deleteProfessor = (req, res) => {
    const sql = 'DELETE FROM professores WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(204).send();
    });
};