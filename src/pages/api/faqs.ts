import { faqs } from "@/data/faqs"
import { Faq } from "@/interface"
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Faq[] | { message: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  if (req.method == 'GET') {
    // Aca se consulta a la base de datos y se retorna la lista de faqs
    res.status(200).json(faqs)
  } else {
    res.status(405).json({ message: 'Metodo no permitido' })
  }
  
}