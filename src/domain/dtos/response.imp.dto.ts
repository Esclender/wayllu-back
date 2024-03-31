import { Response } from 'express'
import { Users } from '@prisma/client'


export type responseDto = {
  res: Response,
  status: number,
  data: string | Partial<Users> | Partial<Users>[] | null 
}