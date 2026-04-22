import { Info, ShieldAlert } from "lucide-react"


function OvertrainingRiskCard() {
    return (
        <div className="bg-white p-6 rounded-[16px] border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex-1 min-w-[300px] font-sans">
            <div className="flex items-center gap-2 mb-6">
                <ShieldAlert className="w-5 h-5 text-slate-700" />
                <h2 className="text-base font-bold text-slate-900">Risco de Overtraining</h2>
            </div>

            {/* Controle Segmentado */}
            <div className="flex items-center w-full bg-white border border-gray-200 rounded-full p-1 mb-6">
                <div className="flex-1 text-center text-sm font-medium text-slate-600 py-1.5 cursor-pointer">Baixo</div>
                <div className="flex-1 text-center text-sm font-bold text-white bg-[#F97316] rounded-full py-1.5 shadow-sm">Moderado</div>
                <div className="flex-1 text-center text-sm font-medium text-slate-600 py-1.5 cursor-pointer">Alto</div>
            </div>

            {/* Barra de Progresso */}
            <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600 font-medium">Índice de carga</span>
                    <span className="text-[#F97316] font-bold">58%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-[#F97316] h-2 rounded-full w-[58%]"></div>
                </div>
            </div>

            {/* Caixa de Informação */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex gap-3 mb-6">
                <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                    Volume levemente acima da média. Considere reduzir a intensidade nos próximos dias.
                </p>
            </div>

            {/* Métricas de Rodapé */}
            <div className="flex justify-between items-center pt-2">
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ACWR</p>
                    <p className="text-sm font-bold text-slate-900">1.18</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">HRV Médio</p>
                    <p className="text-sm font-bold text-slate-900">62 ms</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Descanso</p>
                    <p className="text-sm font-bold text-slate-900">1 dia</p>
                </div>
            </div>
        </div>
    )
}

export default OvertrainingRiskCard