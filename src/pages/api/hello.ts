// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = [
  name: string,
  idade: string,
  sobrenome: string,
  UF: string,
  país: string
]

export default function handler(
  requisicao: NextApiRequest,
  resposta: NextApiResponse<Data>
) {
  resposta.status(200).json({ name: 'John Doe', idade: '25', sobrenome: 'Rodrigues', UF: 'AL', país: 'Brazil' })
}
