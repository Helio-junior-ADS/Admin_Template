import Link from 'next/link'

interface ManuItemProps {
  texto: string,
  icone: any
  url?: string,
  className?: string,
  onClick?: (event:any)=> void,
}

export default function ManuItem(props: ManuItemProps) {
  function renderizarLink() {
    return (
      <div className={`
        flex flex-col justify-center items-center
        h-20 w-20 text-gray-600
        ${props.className}
      `}>
        {props.icone}
        <span className={`
          text-xs font-light 
        `}>
          {props.texto}
        </span>
      </div>
    )
  }
  return (
    <li onClick={props.onClick} className={`
      hover:bg-gray-100
      cursor-pointer
    `}>
      {props.url ? (
      <Link href={props.url}>
          {renderizarLink()}
      </Link>
        
      ) : (
          renderizarLink()
      )}
    </li>
  )
}