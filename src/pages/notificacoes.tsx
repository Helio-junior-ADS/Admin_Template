import Layout from "../components/template/Layout"
import useAppData from "../data/hook/UseAppData"

export default function Notificacoes() {
  const ctx = useAppData()
  return (
    <div>
      <Layout titulo="Notificações"
        subtitulo="Aqui você irá gerenciar as suas notificações"> 
        <h3>
          {ctx.nome}
        </h3>
      </Layout>
    </div>
  )
}
