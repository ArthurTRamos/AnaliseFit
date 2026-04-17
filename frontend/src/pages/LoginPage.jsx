import { Activity, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';


function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(<Eye className='w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors' />);


    async function onLoginClick(emailParams, passwordParams) {
        const url = 'http://localhost:3333/users/login';

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
                localStorage.setItem('token', result.token);
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

                {/* Divisor */}
                <div className="flex items-center justify-center gap-3 my-6">
                    <hr className="w-full border-t border-gray-200" />
                    <span className="text-xs font-medium text-gray-400 whitespace-nowrap">Ou continue com</span>
                    <hr className="w-full border-t border-gray-200" />
                </div>

                {/* Botão Google */}
                <button type="button" className="w-full flex items-center justify-center gap-2 bg-slate-50 border border-gray-200 hover:bg-gray-100 text-gray-800 font-semibold text-sm py-2.5 rounded-lg transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        <path d="M1 1h22v22H1z" fill="none" />
                    </svg>
                    Continuar com Google
                </button>

                <p className="text-center text-sm text-gray-600 mt-6 font-medium" onClick={() => navigate("/register")}>
                    Não tem uma conta? <a className="text-[#008A52] cursor-pointer hover:underline">Cadastre-se</a>
                </p>

            </div>
        </div>
    );
}

export default LoginPage;