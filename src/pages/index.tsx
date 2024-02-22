import Botao from "../../components/botao";
import Questao from "../../components/questao";
import Questionario from "../../components/questionario";
import QuestionModel from "../../model/question";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const base_url = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [questionsIds, setQuestionsIds] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestionModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)


  async function loadQuestionsId() {
    const resp = await fetch(`${base_url}/questionario`)
    const questionsIds = await resp.json()
    setQuestionsIds(questionsIds)
    
  }

  async function loadQuestion(idQuestao: number) {
    const resp = await fetch(`${base_url}/questions/${idQuestao}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.createUseObject(json)
    setQuestao(newQuestion)
    
  }

  useEffect(() => {
    loadQuestionsId()
  }, [])

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds])


  function questaoRespondida(questaoRespondida: QuestionModel) {
    setQuestao(questaoRespondida)
    const certa = questaoRespondida.correct
    setRespostasCertas(respostasCertas + (certa ? 1 : 0))
   
  }

  function nextId() {
    if(questao) {
     const proximoIndice = questionsIds.indexOf(questao.id) + 1
     return questionsIds[proximoIndice]
    }
  }

  function irPraProximoPasso() {
    const proxmimoId = nextId()
    proxmimoId ? goNextQuestion(proxmimoId) : end()
  }

  function goNextQuestion(proxmimoId: number) {
    loadQuestion(proxmimoId)
  }

  function end() {
    router.push({
      pathname: "/resultado",
      query: {
        total: questionsIds.length,
        certas: respostasCertas
      }
    })
  }

  return (
   
      <Questionario 
        questao={questao}
        ultima={nextId() === undefined}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
  );
}
