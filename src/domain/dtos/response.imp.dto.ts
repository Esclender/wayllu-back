import { Response } from 'express'
import { ArtisianEntity } from '../entities'


export type responseDto = {
  res: Response,
  status: number,
  data: string | Partial<ArtisianEntity> | Partial<ArtisianEntity>[] | null 
}