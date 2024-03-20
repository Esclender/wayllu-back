import * as JWT from 'jsonwebtoken'
import EnvsConfig from '../../config/envs'

export default function decodeJwtToken( 
  codedToken: string 
) {
  const Envs = new EnvsConfig()

  return JWT.verify( codedToken, Envs.getJWTSecret() )
}