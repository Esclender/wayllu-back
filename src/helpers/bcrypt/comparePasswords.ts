import bcrypt from 'bcrypt'

export default async function comparePasswords( expectedPassword: string, encryptedPassword: string ) {
  return new Promise( ( resolve, reject ) => {
    bcrypt.compare( expectedPassword, encryptedPassword )
      .then( function ( resultado ) {
        resolve( resultado )
      } )
      .catch( function ( err ) {
        reject( err )
      } )
  } )
}