import { IconeAjustes, IconeBell, IconeCasa, IconeSino } from "../icons"
import ManuItem from "./MenuItem"

export default function ManuLateral () {
  return (
    <aside>
      <ul>
        <ManuItem url="/" texto="Inicio" icone={IconeCasa}/>
        <ManuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>        
        <ManuItem url="/notificacoes" texto="Notificações" icone={IconeSino}/>        
      </ul>
    </aside>
  )
}