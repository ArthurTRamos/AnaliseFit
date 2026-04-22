import ResumeCard from '../components/ResumeCard'
import ChartCard from '../components/ChartCard'
import RecentWorkoutsList from '../components/RecentWorkoutList'
import OvertrainingRiskCard from '../components/OvertrainingRiskCard'
import {renderLineChart, renderBarChart} from '../utils/d3Charts'


function DashboardPage() {
    return (
        <div className="p-8 bg-slate-50 min-h-screen">
            <div className="flex gap-4 mb-4">
                {[1, 2, 3, 4].map((id) => (
                    <ResumeCard key={id} id={id} />
                ))}
            </div>

            <div className="flex gap-4 mb-4">
                <ChartCard title={'Gráfico'} subtitle={'Legenda'} data={[0, 1, 2, 3, 4, 5]} renderChartFn={renderLineChart} /> 
                <ChartCard title={'Gráfico'} subtitle={'Legenda'} data={[0, 1, 2, 3, 4, 5]} renderChartFn={renderBarChart} /> 
            </div>

            <div className="flex gap-4">
                <RecentWorkoutsList />
                <OvertrainingRiskCard />
            </div>
        </div>
    )
}

export default DashboardPage