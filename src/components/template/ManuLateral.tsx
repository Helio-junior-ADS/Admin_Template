import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons"
import ManuItem from "./MenuItem"
import Logo from "./Logo"

export default function ManuLateral () {
  return (
    <aside className={`
      flex flex-col
      bg-gray-200 text-gray-700
      dark:bg-gray-900 
    `}>
      <div className={`
         flex flex-col items-center justify-center  
         bg-gradient-to-r from-indigo-500 to-purple-800
         h-20 w-20
      `}>
        <Logo/>
      </div>
      <ul className="flex-grow">
        <ManuItem url="/" texto="Inicio" icone={IconeCasa}/>
        <ManuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>        
        <ManuItem url="/notificacoes" texto="Notificações" icone={IconeSino}/>        
      </ul>
      <ul>
        <ManuItem           
          texto="Sair" 
          icone={IconeSair}
          onClick={()=> console.log("Logout")}
          className={`
            text-red-600 dark:text-red-400
            hover:bg-red-400 hover:text-white
            dark:hover:text-white
          `}
        />       
      </ul>
    </aside>
  )
}