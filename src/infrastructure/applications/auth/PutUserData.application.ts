/* eslint-disable no-unused-vars */

import { prismaPutDto } from '../../../domain/dtos'
import {PrismaImplementation} from '../../../helpers'


export default class PutUserData {

  static async execute( dataToUdate: prismaPutDto ) {
    const prismaImp = new PrismaImplementation()
    await prismaImp.updateArtisianInfoRepo( dataToUdate )

  }
  
} 