import { PrismaClient, Users } from '@prisma/client'
import { 
  prismaGetListDto,
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

  async getArtisiansListRepo( dto: prismaGetListDto ) {
    const aggregate = [
      {
        $match: {
          ROL: 'ARTESANO',
          NOMBRE_COMPLETO: {
            $regex: dto.filtro.NOMBRE_COMPLETO,
            $options: 'i',
          },
        },
      },
      {
        $skip: ( dto.pagina - 1 ) * 10,
      },
      {
        $limit: 10
      }
    ]
    

    return await prisma.users.aggregateRaw(
      {
        pipeline : aggregate
      }
    )
  }

  
  async registerArtisianRepo( dto: prismaPostDto ): Promise<Users> {
    return await prisma.users.create( {
      data: dto.UsersData
    } )
  }
  async updateArtisianInfoRepo( dto: prismaPutDto ): Promise<Users> {
    return await prisma.users.update( 
      {
        where: {
          id: dto.idUser,
        },
        data: dto.UsersDataToUpdate
      }
    )
  }

}
