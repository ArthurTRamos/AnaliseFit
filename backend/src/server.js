import cors from 'cors'
import dotenv from "dotenv";
import express from 'express'
import usersRoute from './routes/userRoutes.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;
const jwt_secret = process.env.JWT_SECRET;

console.log(jwt_secret)

app.use(cors());
app.use(express.json());

app.use('/users', usersRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));