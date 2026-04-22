import { useEffect, useRef } from "react";

export default function ChartCard({ title, subtitle, data, renderChartFn }) {
    const chartRef = useRef(null);

    useEffect(() => {
        // Se a referência não existir, se não houver dados, ou se não passarem a função de renderização, não faz nada
        if (!chartRef.current || !data || !renderChartFn) return;

        // Chama a função utilitária do D3 passando o DOM element e os dados
        renderChartFn(chartRef.current, data);

        // Opcional: Aqui você poderia adicionar um listener de 'resize' do window
        // para chamar renderChartFn novamente e deixar o gráfico responsivo.
    }, [data, renderChartFn]); // O React vai re-renderizar o gráfico se a data ou a função mudarem

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex-1 min-w-75 font-sans">
            <div className="mb-6">
                <h2 className="text-base font-bold text-slate-900">{title}</h2>
                <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>
            </div>
            
            <div ref={chartRef} className="w-full relative min-h-50"></div>
        </div>
    );
}