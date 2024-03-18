/* eslint-disable no-unused-vars */

import { userAccessCredentialsDto } from '../../../domain/dtos'
import { ArtisianEntity } from '../../../domain/entities'
import {PrismaImplementation, createJwt} from '../../../helpers'


export default class GetUserJwtAccessApplication {

  static async execute( credentials: userAccessCredentialsDto ) {
    const prismaImp = new PrismaImplementation()
    const {CLAVE, URL_IMAGE, ...userLoggedData } = await prismaImp.getArtisianDataByCredentialsRepo( credentials ) as ArtisianEntity

    const jwtGenerated = createJwt( userLoggedData )
    
    return jwtGenerated
  }
  
} 