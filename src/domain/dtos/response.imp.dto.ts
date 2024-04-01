import { Response } from 'express'


export type responseDto = {
  res: Response,
  status: number,
  data: any
}