import { PrismaClient, Productos, RegistrosVentas } from '@prisma/client'
import { 
  prismaGetListProductsDto,
  prismaGetOneProductDto, 
  prismaPostProductDto, 
  prismaProductoVendido, 
  prismaPutProductDto,
} from '../../domain/dtos'

import { IProductRepository } from '../../domain/interfaces/repositories'
import { GenerateUuid } from '..'

const prisma= new PrismaClient()

export default class PrismaProductsImplementation implements IProductRepository {
  
  async getProductsByCredentialsRepo( COD_PRODUCTO: number ): Promise<Productos | null> {
    return await prisma.productos.findFirst( {
      where: {
        COD_PRODUCTO
      }
    } )
  }

  async getProductDataRepo( dto: prismaGetOneProductDto ): Promise<Productos | null> {
    return await prisma.productos.findUnique( {
      where: dto.filtro,
    } )
  }


  async getAllProducts( dto: prismaGetListProductsDto ): Promise<Productos[]> {
    return await prisma.productos.findMany( {
      where: dto.filtro,
    
    } )
  }

  
  async registerProductRepo( dto: prismaPostProductDto ): Promise<Productos> {
    return await prisma.productos.create( {
      data: dto.ProductData
    } )
  }

  async updateProductInfoRepo( dto: prismaPutProductDto ): Promise<Productos> {
    return await prisma.productos.update( 
      {
        where: {
          id: dto.idProduct,
        },
        data: dto.ProductDataToUpdate,
      }
    )
  }

  async registerVenta( dto: prismaProductoVendido ): Promise<RegistrosVentas> {
    const venta = await prisma.registrosVentas.create( {
      data: {
        CODIGO_REGISTRO: GenerateUuid().toString(),
        CANTIDAD_TOTAL_PRODUCTOS: dto.CANTIDAD_TOTAL_PRODUCTOS,
        PRODUCTOS: {
          create: dto.PRODUCTOS
        }
      },
      include: {
        PRODUCTOS: true
      }
    } )


    return venta
  }

}
