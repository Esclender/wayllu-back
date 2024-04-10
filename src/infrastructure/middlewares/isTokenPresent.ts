/* eslint-disable no-unused-vars */
import { NextFunction, Response } from 'express'
import { CustomRequest } from '../../domain/dtos'
import { decodeJwtToken, ResponseImplementation } from '../../helpers'

export default function isTokenPresent( req: CustomRequest, res: Response,next: NextFunction ) {
  try{
    const header = req.headers['authorization'] as string
    const token = header?.split( ' ' )[1]

    if( !token ) {
      return ResponseImplementation( 
        {
          res: res, 
          status: 400, 
          data: 'Token no presente' 
        } )
    }
  
    req.jwt = decodeJwtToken( token )
  }catch( e: any ) {
    return ResponseImplementation( 
      {
        res: res, 
        status: 400, 
        data: e.message 
      } )
  }


  next()
  
}