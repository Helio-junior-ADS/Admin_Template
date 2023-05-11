import Link from 'next/link'

interface ManuItemProps {
  url : string,
  texto: string,
  icone: any
}

export default function ManuItem (props: ManuItemProps) {
  return (
    <li className={`hover:bg-gray-100`}>
      <Link href={props.url}>
        <div className={`
          flex flex-col justify-center items-center
          h-20 w-20
        `}>
          {props.icone}
          <span className={`
            text-xs font-light text-gray-600
          `}>
            {props.texto}
          </span>
        </div>
      </Link>
    </li>
  )
}