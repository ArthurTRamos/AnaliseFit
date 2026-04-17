import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function BaseLayout() {
    return (
        <div className='flex h-screen w-full overflow-hidden'>
            <Sidebar />

            <div className='flex flex-col flex-1'>
                <Header />

                <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
                    <Outlet /> 
                </main>
                
            </div>
        </div>
    )
}

export default BaseLayout