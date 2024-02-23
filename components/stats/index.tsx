import styles from './stats.module.css'

interface EstatisticaProps {
    valor: any
    texto: string
    corFundo?: string
    corFonte?: string
}



export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className={styles.estatistica}>
            <div className={styles.valor} style={{
                backgroundColor: props.corFundo ?? '#FDD60f',
                color: props.corFonte ?? '#333'
            }}>
                {props.valor}
            </div>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    )
}