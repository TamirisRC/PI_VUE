const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'academicmanager',
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }
    console.log('Conectado ao banco de dados como ID ' + db.threadId);
});

module.exports = db;