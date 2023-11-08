export default function questao(requisicao, resposta) {

    if (requisicao.method === 'GET') {
        const id = requisicao.query.id
        resposta.status(200).json({
            id, enunciado: "Qual é a sua cor preferida ?", resposta: [
                'Azul',
                'Verde',
                'Branco',
                'Preto',
                'Vermelho',
                'Amarelo'
            ]
        })
    } else {
        resposta.status(405).send()
    }
}