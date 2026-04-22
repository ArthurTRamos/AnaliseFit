import {Flame, Calendar, Gauge, Calculator} from 'lucide-react'


function ResumeCard({id}) {
    const cardInformations = [
        {
            'id': 1,
            'title': 'Volume Semanal',
        },
        {
            'id': 2,
            'title': 'Treinos realizados'
        },
        {
            'id': 3,
            'title': 'Pace médio'
        },
        {
            'id': 4,
            'title': 'Calorias gastas'
        }
    ]

    function getDatabyId() {
        const data = cardInformations.find((item) => item.id == id)

        return data.title
    }


    return (
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] w-full font-sans">
            <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-slate-500">
                    {getDatabyId()}
                </span>
                {/* Fundo verdinho do ícone com bordas arredondadas */}
                <div className="w-8 h-8 rounded-lg bg-[#E6F2EC] flex items-center justify-center shrink-0">
                    <Flame className="w-4 h-4 text-[#008A52]" strokeWidth={2.5} />
                </div>
            </div>

            {/* Valor Principal */}
            <div className="mb-3">
                <span className="text-3xl font-bold text-slate-900 tracking-tight">
                    42,8 km
                </span>
            </div>

            <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 bg-[#C2E8D5] text-[#008A52] text-xs font-bold rounded-md">
                    +12%
                </span>
                <span className="text-xs text-slate-400 font-medium">
                    vs. semana anterior
                </span>
            </div>
            
        </div>
    )
}

export default ResumeCard