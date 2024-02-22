import { embaralhar } from "../../../../functions/arrays"
import questions from "../questionsDB"

export default (req, res) => {
    const ids =  questions.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}