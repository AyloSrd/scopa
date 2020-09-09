import { useClearRound } from "./useClearRound.js"
import { Outro } from "../../introOutro/components/Outro.js"

export const useOutro = roundData => {
	useClearRound(roundData)
	Outro()
}