//import { Request, Response } from 'express'

// type paramsControllers = {
//   req: Request,
//   res: Response
// }

export default interface IArtisiansRepository {
  getArtisianController() : void
  getArtisiansListController() : void
  registerArtisianController() : void
  updateArtisianInfoController() : void
}