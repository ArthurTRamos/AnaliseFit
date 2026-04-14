/*
File Purpose: backend functions for user context (signin, signup, get account informations, etc.)
*/


import argon2 from 'argon2'
import jwt from 'jsonwebtoken'


const users = [];


export async function getAllUsers(req, res) {
    return res.status(200).json({'users': users});
}


export async function handleRegister(req, res) {
    const { name, email, password } = req.body;

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(409).json({'message': 'Email already in use'});
    } else {
        const hash = await argon2.hash(password);

        users.push({
            id: users.length + 1,
            name: name,
            email: email,
            password: hash,
        })

        return res.status(201).json({ message: 'User created with success' });
    }
}


export async function handleLogin(req, res) {
    const { email, password } = req.body;

    const targetUser = users.find(user => user.email === email);

    if (!targetUser) {
        return res.status(404).send('User not found');
    } 
   
    const isPasswordCorrect = await argon2.verify(targetUser.password, password);

    if (isPasswordCorrect) {
        const userData = {
            "name": targetUser.name,
            "email": targetUser.email
        };

        const jwt_secret = process.env.JWT_SECRET;

        jwt.sign(userData, jwt_secret, (err, token) => {
            if (err) {
                console.log(err)
                return res.status(500).json({'message': 'JWT generation error'});
            }

            return res.status(200).json({
                'message': 'Login with success',
                'token': token
            });
        });
    } else {
        return res.status(401).json({'message': 'Email or password is incorrect'});
    }
}