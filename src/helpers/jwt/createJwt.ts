import * as JWT from 'jsonwebtoken'
import EnvsConfig from '../../config/envs'
import { Users } from '@prisma/client'

export default function createJWTByUsingUserData( 
  payload: Omit<Users, 'URL_IMAGE'> 
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