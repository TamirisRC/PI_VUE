const express = require('express');
const bodyParser = require('body-parser');
const alunoRoutes = require('./routes/alunoRoutes');
const professorRoutes = require('./routes/professorRoutes');
const turmaRoutes = require('./routes/turmaRoutes');
const planoAdaptativoRoutes = require('./routes/planoAdaptativoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/alunos', alunoRoutes);
app.use('/api/professores', professorRoutes);
app.use('/api/turmas', turmaRoutes);
app.use('/api/planoAdaptativo', planoAdaptativoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
