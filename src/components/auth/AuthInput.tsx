interface AuthInputProps {
  label: string
  tipo?: 'text'| 'email'| 'password'
  obrigatorio?: boolean
  naoRenderizarQuando?: boolean
  valor: any
  valorMudou: (novoValor:any) => void
}

export default function (props:AuthInputProps) {
  return props.naoRenderizarQuando ? null :  (
    <div className={`flex flex-col`}>
      <label>{props.label}</label>
      <input 
          type={props.tipo ?? 'text'} 
          value={props.valor}
          onChange={e => props.valorMudou?.(e.target.value)}
          required={props.obrigatorio}
          />       
    </div>
  )
}