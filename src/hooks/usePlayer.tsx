import { useContext } from "react"
import { PlayerValue } from "context/Player"

const usePlayer = () => useContext(PlayerValue)

export default usePlayer
