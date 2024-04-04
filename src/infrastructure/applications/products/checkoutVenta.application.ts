import PrismaProductsImplementation from '../../../helpers/prisma/prisma.products.imp'

export default class CheckoutVenta {
  static async execute( ) {
    const prismaImp = new PrismaProductsImplementation()

    await prismaImp.registerVenta( {
      data: {
        CANTIDAD_TOTAL_PRODUCTOS: 10,
      },
      PRODUCTOS: [
        {
          CANTIDAD: 10,
          ITEM: 1,
          IMAGEN: ''
        }
      ]
    } )
  }
}