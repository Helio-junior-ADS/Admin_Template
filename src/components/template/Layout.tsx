import useAppData from "../../data/hook/UseAppData"
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import ManuLateral from "./ManuLateral"

interface LayoutProps {
  titulo: string,
  subtitulo: string,
  children?: any
};

export default function Layout(props: LayoutProps) {
  const { tema } = useAppData()
  return (
    <div className={`${tema} flex h-screen w-screen`}>
      <ManuLateral />
      <div className={`
        flex flex-col w-full p-7
        bg-gray-300 dark:bg-gray-800        
        `}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>
          {props.children}
        </Conteudo>
      </div>
    </div>
  )
}