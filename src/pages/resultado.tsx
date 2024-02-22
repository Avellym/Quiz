import { useRouter } from "next/router"
import styles from '../styles/resultado.module.css'
import Estatistica from "../../components/stats"
import Botao from "../../components/botao"

export default function Resultado() {
    const router = useRouter()
    
    const total = +router.query?.total
    const certas = +router.query?.certas
    const percentual = Math.round((certas / total) * 100)


    return (
        <div className={styles.resultado}>
            <h1>Totais</h1>
            <div style={{ display: "flex"}}>
                <Estatistica texto="Perguntas" valor={total}/>
                <Estatistica texto="Acertos" valor={certas}
                    corFundo="#10f20d"/>
                <Estatistica texto="Percentual" valor={`${percentual}%`}
                corFundo="#e31210"/>
            </div>
            <Botao href="/" texto="Tentar Novamente"/>
        </div>
    )
}