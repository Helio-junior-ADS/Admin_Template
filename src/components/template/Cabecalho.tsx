import Titulo from './Titulo'
import BotaoAlternarTema from './BotaoAlternarTema'
import useAppData from '../../data/hook/useAppData'

interface CabecalhoProps {
  titulo: string,
  subtitulo: string,
 
}

export default function Cabecalho (props:CabecalhoProps) {
  const { tema, alternaTema } = useAppData() 
  return (
    <div className={`flex`}>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
      <div className={`
        flex flex-grow justify-end`}>
          <BotaoAlternarTema tema={tema} alternarTema={alternaTema}/>
      </div>
    </div>
  )
} 