import { Activity, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from '../contexts/AuthContext'
import BrandLogo from '../components/BrandLogo'


function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(<Eye className='w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors' />);
    const {login} = useContext(AuthContext)


    async function onLoginClick(emailParams, passwordParams) {
        const url = 'http://localhost:3333/users/login'

        const response = await fetch(
            url, 
            {   
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({'email': emailParams, 'password': passwordParams})
            });

        const result = await response.json();

        return result
    }


    async function handleLogin(event) {
        event.preventDefault(); 
    
        try {
            const result = await onLoginClick(email.trim(), password);

            console.log(result)

            if (result.token) {
                login(result.token, result.user)
                navigate("/");
            } else {
                alert('Erro no login: Credenciais inválidas');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro ao conectar com o servidor');
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
            <div className="w-full max-w-105 bg-white p-8 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100">
                <BrandLogo></BrandLogo>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Bem-vindo de volta</h1>
                <p className="text-sm text-gray-500 mb-8">Faça login para acompanhar seu progresso.</p>
                
                <form onSubmit={handleLogin} className="space-y-5">
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
                                placeholder="voce@exemplo.com" 
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#008A52] focus:ring-1 focus:ring-[#008A52] transition-colors placeholder:text-gray-400"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                                Senha
                            </label>
                        </div>
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
                    </div>

                    {/* Botão Entrar */}
                    <button
                        type='submit'
                        className="w-full bg-[#00A360] hover:bg-[#008A52] text-white font-semibold py-2.5 rounded-lg transition-colors mt-2"
                    >
                        Entrar
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6 font-medium">
                    Não tem uma conta? <Link to='/register' className="text-[#008A52] cursor-pointer hover:underline">Cadastre-se</Link>
                </p>

            </div>
        </div>
    );
}

export default LoginPage;