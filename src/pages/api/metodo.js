export default (requisicao, resposta) => {

    if (requisicao.method === 'GET') {
        resposta.status(200).json({ welcome: 'Seja bem-vindo a API' })
    } else {
        resposta.status(405).json({ nao_autorizado: 'A sua requisição não pode ser atendida', metodo })
    } // Retorna a existência da pagina, mas o método de acesso não é permitido.

    resposta.status(200).json({ metodo: requisicao.method })
}