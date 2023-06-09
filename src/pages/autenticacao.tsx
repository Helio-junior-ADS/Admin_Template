import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao } from "../components/icons";


export default function () {
  const [erro, setErro] = useState(null)
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function exibirErro (msg, tempoEmSegundos = 5) {
    setErro(msg)
    setTimeout(()=> setErro(null), tempoEmSegundos * 1000)
  }

  function submeter () {
    if(modo === 'login') {
      console.log('login')      
    }else {       
      console.log('cadastrar')      
    }
  }

  return (
    <div className={`
      flex h-screen items-center justify-center 
    `}>
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img 
        src="https://images.hdqwalls.com/download/cyberpunk-2077-mad-peoples-4k-3r-1280x2120.jpg"
        className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className={`text-2xl font-bold mb-5`}>
          {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
        </h1>
        { erro ? (
          <div className={`
            flex items-center justify-center
            bg-red-500 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg
          `}>
            {IconeAtencao()}
            <span className={`ml-3 text-sm`}>{erro}</span>
          </div>
        ): false }

        <AuthInput
          label="Email"
          tipo='email'
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo='password'
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />
        <button onClick={submeter} className={`
          w-full bg-indigo-500 hover:bg-indigo-400 
          text-white rounded-lg px-4 py-3 mt-6  
        `}>
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full"/>  

        <button onClick={submeter} className={`
          w-full bg-red-500 hover:bg-red-400 
          text-white rounded-lg px-4 py-3   
        `}>
          Entrar com Google 
        </button>        
          {modo === 'login' ? (
            <p className="mt-8">
              Novo por aqui ?
              <a onClick={()=> setModo('cadastro')} className={`
                text-blue-500 hover:text-blue-700 font-semibold
                cursor-pointer
              `}> Crie uma Conta Gratuitamente ?</a>
            </p>
          ) : (
            <p className="mt-8">
            Já faz parte da nossa comunidade ?
            <a onClick={()=> setModo('login')} className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer
            `}> Entre com a suas Credenciais</a>
          </p>
          )}
      </div>
      
    </div>
  )
}