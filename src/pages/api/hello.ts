// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Array<{
  nome: string,
  idade: string,
  sobrenome: string,
  UF: string,
  país: string
}>;

export default function handler(
  requisicao: NextApiRequest,
  resposta: NextApiResponse<Data>
) {
  resposta.status(200).json([
    { nome: 'Victor', idade: '19', sobrenome: 'Moraes', UF: 'AL', país: 'Brazil' },
    { nome: 'Pablo Rodrigues', idade: '19', sobrenome: 'Oliveira', UF: 'AL', país: 'USA' },
    { nome: 'Adriano', idade: '22', sobrenome: 'Silva', UF: 'AL', país: 'Brazil' }])
}
