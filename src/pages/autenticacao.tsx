import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function () {
  const [modo, setModo] = useState<'loguin' | 'cadastro'>('loguin')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  return (
    <div>
      <h1>Autenticação</h1>
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
    </div>
  )
}