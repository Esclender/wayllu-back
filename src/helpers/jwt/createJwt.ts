import * as JWT from 'jsonwebtoken'
import EnvsConfig from '../../config/envs'
import { ArtisianEntity } from '../../domain/entities'

export default function createJWTByUsingUserData( 
  payload: Omit<ArtisianEntity, 'CLAVE' | 'URL_IMAGE'> 
): string {
  const Envs = new EnvsConfig()

  
  return JWT.sign( 
    payload, 
    Envs.getJWTSecret(), 
    {
      expiresIn: '1h'
    } 
  )


}