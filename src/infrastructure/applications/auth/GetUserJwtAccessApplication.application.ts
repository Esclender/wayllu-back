/* eslint-disable no-unused-vars */

import { Users } from '@prisma/client'
import { userAccessCredentialsDto } from '../../../domain/dtos'
import {PrismaImplementation, createJwt} from '../../../helpers'
import comparePasswords from '../../../helpers/bcrypt/comparePasswords'


export default class GetUserJwtAccessApplication {

  static async execute( credentials: userAccessCredentialsDto ) {
    const prismaImp = new PrismaImplementation()
    const {URL_IMAGE, ...userLoggedData } = await prismaImp.getArtisianDataByCredentialsRepo( credentials.DNI ) as Users

    await this._comparePasswords( credentials.CLAVE, userLoggedData.CLAVE )

    const jwtGenerated = createJwt( {
      ...userLoggedData,
      CLAVE: credentials.CLAVE,
    } )

    
    return {
      jwtGenerated,
      ROL: userLoggedData.ROL
    }
  }


  private static async _comparePasswords( claveEntered: string, userClaveRegistered: string ) {
    const arePasswordEqual = await comparePasswords( claveEntered, userClaveRegistered )
    if( !arePasswordEqual ) throw new Error( 'Clave incorrecta' ) 
  }
  
} 