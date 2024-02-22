import QuestionModel from "../../../model/question";
import RespostaModel from "../../../model/resposta";

const questions: QuestionModel[] = [
    new  QuestionModel(301, 'Além de Urizem que outro personagem comsumiu a Fruta da Qliphoth ?', [
        RespostaModel.certa('Mundus'),
        RespostaModel.errada('Sparda'),
        RespostaModel.errada('Argosax'),
        RespostaModel.errada('Nightmare'),
    ]),
    new  QuestionModel(302, 'Qual a Principal Arma de Dante em Devil May Cry 1?', [
        RespostaModel.errada('Alastor'),
        RespostaModel.errada('Yamato'),
        RespostaModel.errada('Rebelion'),
        RespostaModel.certa('Force Edge'),
    ]),
    new  QuestionModel(303, 'Qual o nome da mãe de Dante?', [
        RespostaModel.errada('trish'),
        RespostaModel.errada('lady'),
        RespostaModel.errada('Niko'),
        RespostaModel.certa('Eva'),
    ]),
    new  QuestionModel(304, 'Qual o nome da Filha de Kratos?', [
        RespostaModel.errada('Calisto'),
        RespostaModel.errada('Lysandra'),
        RespostaModel.errada('Pandora'),
        RespostaModel.certa('Calliope'),
    ]),
]

export default questions