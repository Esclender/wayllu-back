/* eslint-disable no-unused-vars */
import { loginCredentialsRequiredDto } from '../../dtos'

export default interface IAuthRepository {
  login( params:loginCredentialsRequiredDto ): void
}