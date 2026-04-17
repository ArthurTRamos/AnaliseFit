import { Activity, Dumbbell, LayoutDashboard, ChartNoAxesColumn, User } from 'lucide-react'
import BrandLogo from '../components/BrandLogo'

function Sidebar() {
    return (
        <aside className="w-65 h-screen bg-white border-r border-gray-200 flex flex-col font-sans">
            
            {/* Header / Logo */}
            <div className="flex h-18 items-center px-6 border-b border-gray-200">
                <BrandLogo></BrandLogo>
            </div>

            {/* Menu de Navegação */}
            <nav className="flex-1 px-3 pt-6 flex flex-col gap-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
                    Menu
                </span>
                
                {/* Item Ativo */}
                <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-[#E6F2EC] text-[#008A52] rounded-xl font-semibold text-sm transition-colors">
                    <LayoutDashboard className="w-5 h-5" strokeWidth={2.5} />
                    <span>Dashboard</span>
                </a>

                {/* Itens Inativos */}
                <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium text-sm transition-colors">
                    <Dumbbell className="w-5 h-5" />
                    <span>Treinos</span>
                </a>
                
                <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium text-sm transition-colors">
                    <ChartNoAxesColumn className="w-5 h-5" />
                    <span>Analytics</span>
                </a>
                
                <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium text-sm transition-colors">
                    <User className="w-5 h-5" />
                    <span>Perfil</span>
                </a>
            </nav>

            {/* Footer / Perfil do Usuário */}
            <div className="border-t border-gray-200 p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C2E8D5] flex items-center justify-center text-[#008A52] font-bold text-sm shrink-0">
                    MA
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">Maria Andrade</span>
                    <span className="text-xs text-slate-500">Plano Pro</span>
                </div>
            </div>
            
        </aside>
    )
}

export default Sidebar