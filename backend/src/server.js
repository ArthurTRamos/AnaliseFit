import express from 'express'
import usersRoute from './routes/userRoutes.js'

const app = express()
app.use(express.json())

app.use('/users', usersRoute)

app.listen(3333, () => console.log('Servidor rodando na porta 3333!'))