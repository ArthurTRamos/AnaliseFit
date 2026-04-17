import { Bell } from "lucide-react";

function Header() {
  return (
    <>
      {/* Altura de 72px para alinhar perfeitamente com a altura do header da Sidebar */}
      <header className="h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 font-sans">
        {/* Título e Data */}
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Semana de 31 mar – 6 abr, 2025
          </p>
        </div>

        {/* Ações e Perfil */}
        <div className="flex items-center gap-4">
          {/* Botão de Notificação */}
          {/* O 'relative' aqui é crucial para a bolinha verde não fugir da posição */}
          <button className="relative flex items-center justify-center w-10 h-10 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-full transition-colors">
            <Bell className="w-5 h-5" strokeWidth={2} />

            {/* Bolinha de notificação com borda branca para dar destaque se sobrepor o sino */}
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#008A52] border-[1.5px] border-white rounded-full box-content" />
            <span className="sr-only">Notificações</span>
          </button>

          {/* Avatar (Usando a mesma paleta e tamanho da Sidebar) */}
          <div className="w-9 h-9 bg-[#C2E8D5] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-sm font-bold text-[#008A52]">MA</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
