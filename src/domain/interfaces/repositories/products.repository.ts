/* eslint-disable no-unused-vars */
import { Productos, RegistrosVentas, Venta } from '@prisma/client'
import { 
  prismaGetListProductsDto, 
  prismaGetOneProductDto, 
  prismaPostProductDto, 
  prismaProductoVendido, 
  prismaPutProductDto, 
  prismaGetAllVentas
} from '../../dtos'

export default interface IProductRepository {
  getProductDataRepo( dto: prismaGetOneProductDto ) : Promise<Productos | null>
  getProductsByCredentialsRepo( COD_PRODUCTO: string ) : Promise<Productos | null>
  getAllProducts( dto: prismaGetListProductsDto, pagina: number, cantidad: number ) : Promise<any>
  registerProductRepo( dto: prismaPostProductDto ) : Promise<Productos>
  updateProductInfoRepo( dto: prismaPutProductDto ) : Promise<Productos>
  registerVenta( dto: prismaProductoVendido ) : Promise<RegistrosVentas>
  getAllVentasRepo( dto: prismaGetAllVentas ) : Promise<Venta[]>
}