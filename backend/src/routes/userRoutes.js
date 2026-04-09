import express from 'express'
import { handleRegister, handleLogin, getAllUsers } from '../controllers/userController.js'

const router = express.Router()

router.get('/', getAllUsers)
router.post('/login', handleLogin)
router.post('/register', handleRegister)


export default router