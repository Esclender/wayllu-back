import { responseDto } from '../domain/dtos'

export default function ResponseImplementation( dto: responseDto ) {
  
  
  return dto.res
    .status( dto.status )
    .json( dto.data )
}