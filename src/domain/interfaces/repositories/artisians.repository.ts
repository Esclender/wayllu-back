/* eslint-disable no-unused-vars */
import { 
  prismaGetCredentialsDocDto, 
  prismaGetListDto, 
  prismaGetOneDocuemntDto, 
  prismaPostDto, 
  prismaPutDto 
} from '../../dtos'
import { ArtisianEntity } from '../../entities'

export default interface IArtisiansRepository {
  getArtisianDataRepo( dto: prismaGetOneDocuemntDto ) : Promise<ArtisianEntity | null>
  getArtisianDataByCredentialsRepo( dto: prismaGetCredentialsDocDto ) : Promise<ArtisianEntity | null>
  getArtisiansListRepo( dto: prismaGetListDto ) : Promise<ArtisianEntity[]>
  registerArtisianRepo( dto: prismaPostDto ) : Promise<ArtisianEntity>
  updateArtisianInfoRepo( dto: prismaPutDto ) : Promise<ArtisianEntity>
}