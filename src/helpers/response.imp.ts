import { responseDto } from '../domain/dtos'

export default function ResponseImplementation( dto: responseDto ) {
  const exitoso = dto.status >= 200 && dto.status < 300 
    ? true
    : false
  
  return dto.res
    .status( dto.status )
    .json( {
      exitoso,
      info: dto.data
    } )
}