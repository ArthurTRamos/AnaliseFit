import ResumeCard from '../components/ResumeCard'
import ChartCard from '../components/ChartCard'

function DashboardPage() {
    return (
        <div>
            <div className='flex'>
                {[1, 2, 3, 4].map((id) => (
                    <ResumeCard key={id} id={id} />
                ))}

                <div className='flex'>

                </div>
            </div>
        </div>
    )
}

export default DashboardPage