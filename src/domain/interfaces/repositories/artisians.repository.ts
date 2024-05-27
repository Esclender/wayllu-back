/* eslint-disable no-unused-vars */
import { Users } from '@prisma/client'
import { 
  prismaGetListDto, 
  prismaGetOneDocuemntDto, 
  prismaPostDto, 
  prismaPutDto, 
  prismaUpdateImageDto
} from '../../dtos'

export default interface IArtisiansRepository {
  getArtisianDataRepo( dto: prismaGetOneDocuemntDto ) : Promise<Users | null>
  getArtisianDataByCredentialsRepo( DNI: number ) : Promise<Users | null>
  getArtisiansListRepo( dto: prismaGetListDto ) : Promise<any>
  registerArtisianRepo( dto: any ) : Promise<Users>
  updateArtisianInfoRepo( dto: prismaPutDto ) : Promise<Users>
  updateArtisianImage( dto: prismaUpdateImageDto ) :Promise<Users>
}