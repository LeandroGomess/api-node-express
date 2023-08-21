//const express = require('express')  
import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import loginRouter from './routers/loginRouter.js'
import logoutRouter from './routers/logoutRouter.js'

const api = express()


api.use('/user', userRouter)
api.use('/product', productRouter)
api.use('/auth', loginRouter)
api.use('/auth', logoutRouter)

api.get('/', (req, res) => {
	res.json({message: "Bem-vindo a nossa API"})

})

api.listen(3000, () => {
    console.log('Servidor rodando na porta 3000! http://localhost:3000')
})

