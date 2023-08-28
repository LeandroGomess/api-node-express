//const express = require('express')  
import express from 'express'
import bodyParser from 'body-parser'

import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'

const api = express()

// converte toda requisição com body json para objeto no req.body
api.use(bodyParser.json())

api.use('/user', userRouter)
api.use('/product', productRouter)

api.get('/', (req, res) => {
	res.json({message: "Bem-vindo a nossa API"})

})

api.listen(3000, () => {
    console.log('Servidor rodando na porta 3000! http://localhost:3000')
})

