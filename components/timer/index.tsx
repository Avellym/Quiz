import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from './timer.module.css'

interface TimerProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Timer(props: TimerProps) {
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#10f20d', '#fffb26', '#e31210',]}
                colorsTime={[10, 5, 0]}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
        </div>
            
    )
}