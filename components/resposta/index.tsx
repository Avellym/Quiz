import styles from './styles.module.css'
import RespostaModel from "../../model/resposta"

interface RespostaProps {
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaEscolhida: (indice: number) => void
}

export default function Resposta(props: RespostaProps) {
    const resposta = props.valor
    const respostaRevelada = resposta.revelada ? styles.respostaRevelada : ''
    return (
        <div className={styles.resposta}
            onClick={() => props.respostaEscolhida(props.indice)}>
            <div className={`${styles.conteudoResposta} ${respostaRevelada}`}>
                <div className={styles.cardFrente}>
                    <div className={styles.letra}
                        style={{ backgroundColor: props.corFundoLetra }}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.cardVerso}>
                    {resposta.certa ? (
                        <div className={styles.certa}>
                            <div>A resposta certa é...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    ) : (
                        <div className={styles.errada}>
                            <div>A resposta informada está errada...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}