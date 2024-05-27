/* eslint-disable no-unused-vars */

import { Users } from '@prisma/client'
import {PrismaImplementation, createJwt} from '../../../helpers'
import comparePasswords from '../../../helpers/bcrypt/comparePasswords'
import { UsersAccessCredentialsDto } from '../../../domain/dtos'


export default class GetUserJwtAccessApplication {

  static async execute( credentials: UsersAccessCredentialsDto ) {
    const prismaImp = new PrismaImplementation()
    const {...userLoggedData } = await prismaImp.getArtisianDataByCredentialsRepo( credentials.DNI ) as Users

    await this._comparePasswords( credentials.CLAVE, userLoggedData.CLAVE )

    const jwtGenerated = createJwt( {
      
      ...userLoggedData,
      CLAVE: credentials.CLAVE,
      
    } )

    
    return {
      jwtGenerated,
      ROL: userLoggedData.ROL,
    }
  }


  private static async _comparePasswords( claveEntered: string, userClaveRegistered: string ) {
    const arePasswordEqual = await comparePasswords( claveEntered, userClaveRegistered )
    if( !arePasswordEqual ) throw new Error( 'Clave incorrecta' ) 
  }
  
} 