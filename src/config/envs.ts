import { EnvsConfigInterface } from '../domain/interfaces/config/envs.interface'

export default class EnvsConfig implements EnvsConfigInterface {
  getJWTExpiredTime(): string {
    return process.env.JWT_EXPIRED_TIME || ''
  }
  getJWTSecret(): string {
    return process.env.JWT_SECRET || ''
  }
  getPort(): string {
    return process.env.PORT || ''
  }

}