import bcrypt from 'bcrypt'
const saltRounds = 10

export default async function encryptPassword ( clave : string ) {
  return new Promise( ( resolve, reject ) => {
    bcrypt.hash( clave, saltRounds, async function ( err, hash ) {
      resolve( hash )

      reject( err )
    } )
  } )
}
