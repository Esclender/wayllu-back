
import { PrismaClient } from '@prisma/client'
import { 
  prismaGetCredentialsDocDto,
  prismaGetListDto, 
  prismaGetOneDocuemntDto, 
  prismaPostDto, 
  prismaPutDto 
} from '../../domain/dtos'
import { ArtisianEntity } from '../../domain/entities'
import {IArtisiansRepository} from '../../domain/interfaces/repositories'

const prisma = new PrismaClient()


export default class PrismaArtisiansImplementation implements IArtisiansRepository {
  async getArtisianDataByCredentialsRepo( dto: prismaGetCredentialsDocDto ): Promise<ArtisianEntity | null> {
    return await prisma.artisans.findFirst( {
      where: {
        ...dto
      }
    } )
  }

  async getArtisianDataRepo( dto: prismaGetOneDocuemntDto ): Promise<ArtisianEntity | null> {
    return await prisma.artisans.findUnique( {
      where: dto.filtro
    } )
  }


  async getArtisiansListRepo( dto: prismaGetListDto ): Promise<ArtisianEntity[]> {
    return await prisma.artisans.findMany( {
      where: dto.filtro
    } )
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