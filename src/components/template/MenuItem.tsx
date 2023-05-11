interface ManuItemProps {
  url : string,
  texto: string,
  icone: any
}

export default function ManuItem (props: ManuItemProps) {
  return (
    <li className={``}>
      {props.icone}
    </li>
  )
}