import { PropsWithChildren, createContext } from "react"

const PlayerValue = createContext({})

const PlayerContext: React.FC<PropsWithChildren> = ({ children }) => {
  return <PlayerValue.Provider value={{}}>
    {children}
  </PlayerValue.Provider>
} 

export default PlayerContext
