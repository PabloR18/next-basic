export default function questao(requisicao, resposta) {

    if (requisicao.method === 'GET') {
        resposta.status(200).json({
            enunciado: "Os ultimos 6 ganhadores da Copa foram: ", resposta: [
                'Argentina - 2022',
                'França - 2018',
                'Alemanha - 2014',
                'Espanha - 2010',
                'Italia - 2006',
                'Brasil - 2002'
            ]
        })
    } else {
        resposta.status(405).send()
    }
}