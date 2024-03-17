import { Request, Response } from 'express'

export type expressControllersDto = {
  req: Request,
  res: Response
}

export type loginCredentialsRequiredDto = {
  dni: string,
  clave: string
}