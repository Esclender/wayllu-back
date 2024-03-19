import { PrismaClient } from '@prisma/client'
import { 
  prismaGetOneDocuemntDto, 
  prismaPostDto, 
  prismaPutDto, 
  userAccessCredentialsDto
} from '../../domain/dtos'

import { ArtisianEntity } from '../../domain/entities'
import {IArtisiansRepository} from '../../domain/interfaces/repositories'

const prisma= new PrismaClient()
export default class PrismaArtisiansImplementation implements IArtisiansRepository {
  async getArtisianDataByCredentialsRepo( dto: userAccessCredentialsDto ): Promise<ArtisianEntity | null> {
    return await prisma.artisans.findFirst( {
      where: dto
    } )
  }

  async getArtisianDataRepo( dto: prismaGetOneDocuemntDto ): Promise<ArtisianEntity | null> {
    return await prisma.artisans.findUnique( {
      where: dto.filtro
    } )
  }


  async getArtisiansListRepo(): Promise<ArtisianEntity[]> {
    return await prisma.artisans.findMany( {} )
  }

  
  async registerArtisianRepo( dto: prismaPostDto ): Promise<ArtisianEntity> {
    return await prisma.artisans.create( {
      data: dto.artisianData
    } )
  }
  async updateArtisianInfoRepo( dto: prismaPutDto ): Promise<ArtisianEntity> {
   
    return await prisma.artisans.update( 
      
      {
        where: {
          id: dto.idArtisian,
          CODIGO: dto.codigoArtisian
        },
        data: dto.artisianDataToUpdate
      }
    )
  }

}
