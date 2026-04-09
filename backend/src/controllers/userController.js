import argon2 from 'argon2'

const users = []


export async function getAllUsers(req, res) {
    return res.status(200).json({"users": users})
}


export async function handleRegister(req, res) {
    const { name, email, password, birth } = req.body

    const existingUser = users.find(user => user.email === email)

    if (existingUser) {
        return res.status(409).send('Email already in use')
    } else {
        const hash = await argon2.hash(password)

        users.push({
            name: name,
            email: email,
            password: hash,
            birth: birth
        })

        return res.status(201).send('User created with success')
    }
}


export async function handleLogin(req, res) {
    const { email, password } = req.body

    const targetUser = users.find(user => user.email === email)

    if (!targetUser) {
        return res.status(404).send('User not found')
    } 
   
    const isPasswordCorrect = await argon2.verify(targetUser.password, password)

    if (isPasswordCorrect) {
        return res.status(200).send('Login with success')
    } else {
        return res.status(401).send('Email or password is incorrect')
    }
}