import { createContext,useState } from 'react'

type Tema = 'dark' | ''

interface AppContextProps {
  tema?: Tema, 
  alternaTema?: () => void 
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [tema,setTema] = useState<Tema>('dark')

  function alternaTema () {
    setTema(tema === '' ? 'dark' : '')
  }

  return (
    <AppContext.Provider value={{
      tema,
      alternaTema
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
