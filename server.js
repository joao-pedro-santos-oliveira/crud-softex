const express = require('express')
const app = express()

app.get('/alunos', (req, res) => {
    res.status(200).json('Exibindo informações dos alunos!')
})

app.post('/cadastro', (req, res) => {
    res.status(200).json('Aluno cadastrado com sucesso!')
})

app.put('/atualizando', (req, res) => {
    res.status(200).json('Informações atualizdas com sucesso!')
})

app.delete('/deletando', (req, res) => {
    res.status(200).json('Aluno deletado com sucesso!')
})

app.listen(8080, () => {
    console.log(`rodando na porta 8080`)
})