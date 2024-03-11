import { EnvsConfigInterface } from '../domain/interfaces/config/envs.interface'

export default class EnvsConfig implements EnvsConfigInterface {
  getPort(): String {
    return process.env.PORT || ''
  }
}