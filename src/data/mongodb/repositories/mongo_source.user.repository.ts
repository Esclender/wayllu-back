import IMongoSourceArtisians from '../interfaces/mongo_source.user.interface'

export default class MongoArtisiansSource implements IMongoSourceArtisians {
  getArtisian(): void {
    throw new Error('Method not implemented.')
  }
  getArtisiansList(): void {
    throw new Error('Method not implemented.')
  }
  registerArtisian(): void {
    throw new Error('Method not implemented.')
  }
  updateArtisianInfo(): void {
    throw new Error('Method not implemented.')
  }
  
}