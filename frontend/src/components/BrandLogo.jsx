import { Activity } from 'lucide-react'

function BrandLogo() {
    return (
        <div className="flex items-center justify-center gap-2 mb-8">
            <div className="bg-[#008A52] p-1.5 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl text-gray-900 font-bold tracking-tight">Análise <span className="text-[#008A52]">Fit</span></span>   
        </div>
    )
}

export default BrandLogo