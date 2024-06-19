/* eslint-disable no-unused-vars */
import { Productos } from '@prisma/client'
import PrismaProductsImplementation from '../../../helpers/prisma/prisma.products.imp'


export default class UpdateProductInfoApplication {

  static async execute( dto: Partial<Productos> ) {
    const prismaImp = new PrismaProductsImplementation()
    const {id, ...productData} = dto
    
    prismaImp.updateProductInfoRepo( {
      idProduct: dto.id ?? '',
      ProductDataToUpdate: productData
    } )
  }
  
}