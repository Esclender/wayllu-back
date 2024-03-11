import express from 'express'
import { Request, Response } from 'express'

export default function ArstesanosRouter() {
  const router = express.Router()

  router.get('/', async (req: Request, res: Response) => {
    res
      .status(200)
      .json({
        exitoso: true,
      })
  })

  return router
}