/* eslint-disable no-unused-vars */
import { Users } from '@prisma/client'
import { 
  prismaGetListDto, 
  prismaGetOneDocuemntDto, 
  prismaPostDto, 
  prismaPutDto 
} from '../../dtos'

export default interface IArtisiansRepository {
  getArtisianDataRepo( dto: prismaGetOneDocuemntDto ) : Promise<Users | null>
  getArtisianDataByCredentialsRepo( DNI: number ) : Promise<Users | null>
  getArtisiansListRepo( dto: prismaGetListDto ) : Promise<Users[]>
  registerArtisianRepo( dto: prismaPostDto ) : Promise<Users>
  updateArtisianInfoRepo( dto: prismaPutDto ) : Promise<Users>
}