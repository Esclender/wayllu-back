/* eslint-disable no-unused-vars */

import {PrismaImplementation} from '../../../helpers'


export default class GetLoggedUserData {

  static async execute( id: string ) {
    const prismaImp = new PrismaImplementation()

    return await prismaImp.getArtisianDataRepo( {filtro: {id}} )

  }
  
} 