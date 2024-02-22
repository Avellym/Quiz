import styles from './questionario.module.css'
import QuestionModel from "../../model/question"
import Questao from '../questao'
import Botao from '../botao'

interface QuestionarioProps {
    questao: QuestionModel
    ultima: boolean
    questaoRespondida: (questao: QuestionModel) => void
    irPraProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

function respostaEscolhida(indice: number) {
    if (props.questao.naoRespondida) {
        props.questaoRespondida(props.questao.responderCom(indice))
    }
}

    return (
        <div className={styles.questionario}>
            {props.questao ? <Questao 
                valor={props.questao}
                tempoPraResposta={6}
                respostaEscolhida={respostaEscolhida}
                tempoEsgotado={props.irPraProximoPasso}/>
                : false
            }
                <Botao onClick={props.irPraProximoPasso}
                texto={props.ultima ? 'Finalizar' : 'Próxima'}/>
        </div>
    )
}