import { NextFunction, Request, Response } from 'express'
import { EncryptPassword } from '../../helpers'

export default async function isClaveToUpdate( req: Request, res: Response, next: NextFunction ) {
  const {body} = req
  

  if( body.CLAVE ) {
    req.body = {
      ...body,
      CLAVE: await EncryptPassword( body.CLAVE ),
    }
    next()
  }else{
    next()
  }

  
} 