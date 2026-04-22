import { Activity, Mail, Lock, Eye, EyeOff, User } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function RegisterPage() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(<Eye className='w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors' />);


    async function onRegisterClick(nameParams, emailParams, passwordParams) {
        const url = 'http://localhost:3333/users/register'

        const response = await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ "name": nameParams, "email": emailParams, "password": passwordParams })
            }
        )

        const result = await response.json()
        return {
            status: response.status,
            body: result
        }
    }

    async function handleRegister(event) {
        event.preventDefault();

        try {
            const result = await onRegisterClick(name.trim(), email.trim(), password)

            if (result.status == 201) {
                alert('Cadastro realizado com sucesso')
                navigate("/login");
            } else {
                alert("Erro no Cadastro. Email já em uso")
            }
        } catch (error) {
            console.error("Erro na requisição:", error)
            alert("Erro ao conectar com o servidor.")
        }
    }

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(<EyeOff className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" />);
            setType('text');
        } else {
            setIcon(<Eye className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" />);
            setType('password');
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
            <div className="w-full max-w-105 bg-white p-8 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 my-8">
                
                {/* Logo Header */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="bg-[#008A52] p-1.5 rounded-lg flex items-center justify-center">
                        <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-xl text-gray-900 font-bold tracking-tight">Análise <span className="text-[#008A52]">Fit</span></span>
                </div>

                {/* Headings */}
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Crie sua conta</h1>
                <p className="text-sm text-gray-500 mb-8">Comece sua jornada fitness hoje mesmo.</p>
                
                <form onSubmit={handleRegister} className="space-y-5">
                    {/* Input Nome Completo */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1.5">
                            Nome completo
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <User className="w-4 h-4 text-gray-400" />
                            </div>
                            <input 
                                type="text" 
                                id="name" 
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Seu nome"
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#008A52] focus:ring-1 focus:ring-[#008A52] transition-colors placeholder:text-gray-400"
                                required
                            />
                        </div>
                    </div>

                    {/* Input E-mail */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1.5">
                            E-mail
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <Mail className="w-4 h-4 text-gray-400" />
                            </div>
                            <input 
                                type="email" 
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="voce@exemplo.com" 
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#008A52] focus:ring-1 focus:ring-[#008A52] transition-colors placeholder:text-gray-400"
                                required
                            />
                        </div>
                    </div>

                    {/* Input Senha */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800 mb-1.5">
                            Senha
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <Lock className="w-4 h-4 text-gray-400" />
                            </div>
                            <input 
                                type={type}
                                id="password"
                                placeholder="••••••••" 
                                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#008A52] focus:ring-1 focus:ring-[#008A52] transition-colors placeholder:text-gray-400" 
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                            <button type="button" className="absolute inset-y-0 right-0 pr-3.5 flex items-center" onClick={handleToggle}>
                                {icon}
                            </button>
                        </div>
                        {/* Texto de ajuda da senha */}
                        <p className="text-xs text-gray-500 mt-1.5">
                            Deve ter pelo menos 8 caracteres.
                        </p>
                    </div>

                    {/* Botão Criar Conta */}
                    <button
                        type='submit'
                        className="w-full bg-[#00A360] hover:bg-[#008A52] text-white font-semibold py-2.5 rounded-lg transition-colors mt-2"
                    >
                        Criar conta
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-6 font-medium">
                    Já tem uma conta? <Link to='/login' className="text-[#008A52] hover:underline">Entrar</Link>
                </p>

            </div>
        </div>
    );
}

export default RegisterPage;