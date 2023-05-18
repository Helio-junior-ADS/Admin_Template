import Layout from "../components/template/Layout"
import useAppData from "../data/hook/UseAppData"

export default function Notificacoes() {
  const { alternaTema } = useAppData()
  return (
    <div>
      <Layout titulo="Notificações"
        subtitulo="Aqui você irá gerenciar as suas notificações"> 
          <button onClick={ alternaTema }>Alternar Tema</button>
      </Layout>
    </div>
  )
}
