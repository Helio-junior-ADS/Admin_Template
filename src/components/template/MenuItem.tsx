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
        h-20 w-20
        dark:text-gray-200 
        ${props.className}
      `}>
        {props.icone}
        <span className={`text-xs font-light`}>
          {props.texto}
        </span>
      </div>
    )
  }
  return (
    <li onClick={props.onClick} className={`
      hover:bg-gray-100 dark:hover:bg-gray-800
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