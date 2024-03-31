import { PrismaClient, Users } from '@prisma/client'
import { 
  prismaGetOneDocuemntDto, 
  prismaPostDto, 
  prismaPutDto,
} from '../../domain/dtos'

import {IArtisiansRepository} from '../../domain/interfaces/repositories'

const prisma= new PrismaClient()

export default class PrismaArtisiansImplementation implements IArtisiansRepository {
  async getArtisianDataByCredentialsRepo( DNI: number ): Promise<Users | null> {
    return await prisma.users.findFirst( {
      where: {
        DNI
      }
    } )
  }

  async getArtisianDataRepo( dto: prismaGetOneDocuemntDto ): Promise<Users | null> {
    return await prisma.users.findUnique( {
      where: dto.filtro,
    } )
  }


  async getArtisiansListRepo(): Promise<Users[]> {
    return await prisma.users.findMany( {
      where: {
        ROL: 'ARTESANO'
      }
    } )
  }

  
  async registerArtisianRepo( dto: prismaPostDto ): Promise<Users> {
    return await prisma.users.create( {
      data: dto.artisianData
    } )
  }
  async updateArtisianInfoRepo( dto: prismaPutDto ): Promise<Users> {
    return await prisma.users.update( 
      {
        where: {
          id: dto.idArtisian,
        },
        data: dto.artisianDataToUpdate
      }
    )
  }

}
