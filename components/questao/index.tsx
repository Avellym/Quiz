import QuestionModel from "../../model/question"
import Enunciado from "../enunciado"
import Resposta from "../resposta"
import Timer from "../timer"
import styles from './styles.module.css'

const letras = [
    {valor: 'A', cor: '#f2c866'},
    {valor: 'B', cor: '#f266ba'},
    {valor: 'C', cor: '#85e4f2'},
    {valor: 'D', cor: '#bce596'},
]

interface QuestaoProps {
    valor: QuestionModel
    tempoPraResposta?: number
    respostaEscolhida: (indice: number) => void
    tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function renderRespotas() {
        return  questao.respostas.map((resposta, i) => {
            return (
                <Resposta 
                    key={`${questao.id}-${i}`}
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    respostaEscolhida={props.respostaEscolhida}/>
            )
        })
    }
    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado}/>
            <Timer key={questao.id} 
                   duracao={props.tempoPraResposta ?? 10}
                   tempoEsgotado={props.tempoEsgotado}/>
            {renderRespotas()}
        </div>
    )
}