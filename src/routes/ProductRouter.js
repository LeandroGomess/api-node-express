import express from 'express'

const router = express.Router()

//cria uma rota na raiz
router.get('/', (req, res) => {
    res.json({message: "produto get"})
})

router.post('/', (req, res) => {
    res.json({message: "produto post"})
})

router.put('/', (req, res) => {
    res.json({message: "produto put"})
})

router.delete('/', (req, res) => {
    res.json({message: "deletar produto"})
})

export default router