import {Bell} from 'lucide-react'

function Header() {
    return (
        <header className='h-16 border-b flex items-center justify-between px-6 shrink-0'>
            <div>
                <h1 className='text-base font-semibold'>Dashboard</h1>
                <p className='text-xs'>Semana de 31 mar - 6 abr, 2025</p>
            </div>
            <div className='flex items-center gap-3'>
                <button>
                    <Bell className='w-4 h-4'></Bell>
                    <span className='absolute bg-emerald-200 top-1.5 right-1.5 w-1.5 h-1.5 rounded-full' />
                    <span className='sr-only'>Notificações</span>
                </button>
                <div className='w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center cursor-pointer'>
                    <span className='text-xs font-semibold text-emerald-600'>AR</span>
                </div>
            </div>
        </header>
    )
}

export default Header