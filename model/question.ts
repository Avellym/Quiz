import { embaralhar } from "../functions/arrays"
import RespostaModel from "./resposta"

export default class QuestionModel {
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #correto: boolean
    #respondida: boolean

   constructor(id: number, enunciado: string, respostas: RespostaModel[], correto = false, respondida = false) {
    this.#id = id
    this.#enunciado = enunciado
    this.#respostas = respostas
    this.#correto = correto
    this.#respondida = respondida
   }

   get id(){
    return this.#id
   }

   get enunciado(){
    return this.#enunciado
   }

   get respostas(){
    return this.#respostas
   }

   get correct(){
    return this.#correto
   }

   get naoRespondida(){
    return !this.#respondida

   }

   get respondida(){
    for(let resposta of this.#respostas) {
        if(resposta.revelada) return true
    }
    return false
   }

   responderCom(indice: number): QuestionModel {
    const acertou = this.#respostas[indice]?.certa
    const respostas = this.#respostas.map((resposta, i ) => {
        const respostaSelecionada = indice === i
        const deveRevelar = respostaSelecionada || resposta.certa
        return deveRevelar ? resposta.revelar() : resposta
    })
    return new QuestionModel(this.id, this.enunciado, respostas, acertou)
   }

   embaralharRespostas(): QuestionModel {
    let respotasEmbaralhadas = embaralhar(this.#respostas)
    return new QuestionModel(this.#id, this.#enunciado, respotasEmbaralhadas, this.#correto)
   }

   static createUseObject(obj: QuestionModel): QuestionModel {
    const respostas = obj.respostas.map(resp => RespostaModel.createUseObject(resp))
    return new QuestionModel(obj.id, obj.enunciado, respostas, obj.correct)
}

   toObject() {
    return {
        id: this.#id,
        enunciado: this.#enunciado,
        respostas: this.#respostas.map(resp => resp.toObject()),
        respondida: this.respondida,
        correto: this.#correto,
    }
   }
}