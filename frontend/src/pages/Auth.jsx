import { Dumbbell } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AuthPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    async function onLoginClick(emailParams, passwordParams) {
        const url = 'http://localhost:3333/users' 

        const response = await fetch(url, {   
            method: "POST",
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ email: emailParams, password: passwordParams })
        })

        const result = await response.json()
        return result
    }

    async function handleLogin(event) {
        event.preventDefault(); 
        console.log(`${email} e ${password}`)
    
        try {
            const result = await onLoginClick(email.trim(), password);

            if (result.token) {
                localStorage.setItem('token', result.token);
                console.log("Login com sucesso! Token salvo.");
                navigate("/")
            } else {
                alert("Erro no login: Credenciais inválidas.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao conectar com o servidor.");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-96 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex justify-center">
                    <Dumbbell />
                    <span className="text-black font-bold">Análise</span>
                    <span className="text-emerald-700">Fit</span>
                </div>
                <h1>Bem-vindo de volta</h1>
                <p className="pb-6">Faça login para acompanhar seu progresso</p>
                
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">E-mail</label><br />
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="voce@exemplo.com" 
                        className="border rounded-2xl p-1 w-full"
                        value={email} // Correção 4: Sem o .trim() aqui
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <label htmlFor="password" className="mt-4 block">Senha</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="******" 
                        className="p-1 w-full border rounded-2xl mb-4" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                    <button
                        type='submit'
                        className="p-1 bg-emerald-600 text-white w-full border rounded-2xl hover:bg-emerald-700 transition-colors"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AuthPage