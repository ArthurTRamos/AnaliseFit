import { MapPin, Clock, Zap, Bike, Dumbbell, Activity } from "lucide-react"


function RecentWorkoutsList() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex-2 min-w-125 font-sans">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-base font-bold text-slate-900">Treinos Recentes</h2>
                <a href="#" className="text-sm font-semibold text-[#008A52] hover:underline">Ver todos</a>
            </div>

            <div className="flex flex-col">
                {/* Item 1 - Corrida */}
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#E6F2EC] flex items-center justify-center">
                            <Activity className="w-5 h-5 text-[#008A52]" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">Corrida</p>
                            <p className="text-xs text-slate-500">Hoje, 06:30</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> 10,2 km</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 56 min</span>
                        <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5" /> 5'29" /km</span>
                    </div>
                </div>

                {/* Item 2 - Ciclismo */}
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#E6F2EC] flex items-center justify-center">
                            <Bike className="w-5 h-5 text-[#008A52]" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">Ciclismo</p>
                            <p className="text-xs text-slate-500">Ontem, 07:00</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> 32 km</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 1h 18min</span>
                        <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5" /> 24,6 km/h</span>
                    </div>
                </div>

                {/* Item 3 - Musculação */}
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#FFF0E6] flex items-center justify-center">
                            <Dumbbell className="w-5 h-5 text-[#F97316]" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">Musculação</p>
                            <p className="text-xs text-slate-500">Qua, 18:00</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 55 min</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentWorkoutsList