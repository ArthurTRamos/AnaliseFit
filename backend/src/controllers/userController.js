import argon2 from 'argon2'
import jwt from 'jsonwebtoken'


const users = []


export async function getAllUsers(req, res) {
    return res.status(200).json({'users': users})
}


export async function handleRegister(req, res) {
    const { name, email, password } = req.body

    const existingUser = users.find(user => user.email === email)

    if (existingUser) {
        return res.status(409).json({'message': 'Email already in use'})
    } else {
        const hash = await argon2.hash(password)

        users.push({
            id: users.length + 1,
            name: name,
            email: email,
            password: hash,
        })

        return res.status(201).json({ message: 'User created with success' })
    }
}


export async function handleLogin(req, res) {
    const { email, password } = req.body

    const targetUser = users.find(user => user.email === email)

    if (!targetUser) {
        return res.status(404).json({ message: 'User not found' })
    }

    const isPasswordCorrect = await argon2.verify(targetUser.password, password)

    if (!isPasswordCorrect) {
        return res.status(401).json({ message: 'Email or password is incorrect' })
    }

    const payload = {
        'id': targetUser.id,
        'name': targetUser.name
    }

    const jwt_secret = process.env.JWT_SECRET

    try {
        const token = jwt.sign(payload, jwt_secret, {
            expiresIn: '1h'
        })

        return res.status(200).json({
            message: 'Login with success',
            token: token,
            user: {
                id: targetUser.id,
                name: targetUser.name,
                email: targetUser.email
            }
        })

    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: 'JWT generation error' })
    }
}