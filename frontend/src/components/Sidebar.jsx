import {Dumbbell, LayoutDashboard, ChartNoAxesColumn, User} from 'lucide-react'

function Sidebar() {
    return (
        <aside className='border-r'>
            <div className='flex h-16 items-center px-6 border-b'>
                <Dumbbell></Dumbbell>
                <span>Análise Fit</span>
            </div>
            <nav>
                <span>Menu</span>
                <div className='flex'>
                    <LayoutDashboard></LayoutDashboard>
                    <span>Dashboard</span>
                </div>
                <div className='flex'>
                    <Dumbbell></Dumbbell>
                    <span>Treinos</span>
                </div>
                <div className='flex'>
                    <ChartNoAxesColumn></ChartNoAxesColumn>
                    <span>Analytics</span>
                </div>
                <div className='flex'>
                    <User></User>
                    <span>Perfil</span>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar