import PrismaProductsImplementation from '../../../helpers/prisma/prisma.products.imp'

export default class PostNewProductApplication {

  static async execute( dto: {
    CATEGORIA: string,
    IMAGEN: string,
    DESCRIPCION: string,
    ANCHO: number,
    ALTO: number,
    PESO: number,
    TIPO_PESO: string,
    UBICACION: string,
    COD_ARTESANA: number,
    COD_FAMILIA: number,
    PRECIO: number
  } ) {
    const prismaImp = new PrismaProductsImplementation()
    const lastItemCode: any = await prismaImp.getLastProductItemCode()
    const lastProductOrdenCode: any = await prismaImp.getLastProductByArtesano( dto.COD_ARTESANA )
    const COD_ORDEN_PRO = lastProductOrdenCode.COD_ORDEN_PRO+ 1
    const COD_PRODUCTO = `${dto.COD_FAMILIA}${dto.COD_ARTESANA}` + ( COD_ORDEN_PRO >= 10 ? `0${COD_ORDEN_PRO}` : `00${COD_ORDEN_PRO}` )
    const productObj = {
      COD_ORDEN_PRO ,
      ITEM: lastItemCode.ITEM + 1,
      COD_PRODUCTO: COD_PRODUCTO,
      ...dto
    }
    
    prismaImp.registerProductRepo( {
      ProductData: productObj
    } )
  }
  
}