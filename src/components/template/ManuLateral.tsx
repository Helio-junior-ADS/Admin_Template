import { IconeAjustes, IconeCasa, IconeSino } from "../icons"
import ManuItem from "./MenuItem"
import Logo from "./Logo"

export default function ManuLateral () {
  return (
    <aside>
      <div className={`
         flex flex-col items-center justify-center  
         bg-gradient-to-r from-indigo-500 to-purple-800
         h-20 w-20
      `}>
        <Logo/>
      </div>
      <ul>
        <ManuItem url="/" texto="Inicio" icone={IconeCasa}/>
        <ManuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>        
        <ManuItem url="/notificacoes" texto="Notificações" icone={IconeSino}/>        
      </ul>
    </aside>
  )
}