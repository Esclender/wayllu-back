
import { prismaPutProductDto } from '../../../domain/dtos'
import { PrismaProductsImplementation } from '../../../helpers'


export default class PutProductData {

  static async execute( dataToUpdate: prismaPutProductDto ) {
    const prismaImp = new PrismaProductsImplementation()
    await prismaImp.updateProductInfoRepo( dataToUpdate )

  }
  
} 