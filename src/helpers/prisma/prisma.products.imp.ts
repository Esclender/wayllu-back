import { PrismaClient, Productos, RegistrosVentas, Venta } from '@prisma/client'
import { 
  prismaGetAllVentas,
  prismaGetOneProductDto, 
  prismaPostProductDto, 
  prismaProductoVendido, 
  prismaPutProductDto,
} from '../../domain/dtos'

import { IProductRepository } from '../../domain/interfaces/repositories'
import { GenerateUuid } from '..'
// import { getEndDateOfWeek, getStartDateOfWeek, getWeekDates } from '../week/getWeek'

const prisma= new PrismaClient()

export default class PrismaProductsImplementation implements IProductRepository {
  
  async getProductsByCredentialsRepo( COD_PRODUCTO: string ): Promise<Productos | null> {
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

  async getAllProducts( dto: {filtro: Partial<Productos>}, pagina:number, cantidad:number ) {
    console.log( cantidad )
    const aggregate = [ 
      {
        $match: {
          ...dto.filtro,
          COD_PRODUCTO: {$regex: dto.filtro.COD_PRODUCTO != undefined ? `^${dto.filtro.COD_PRODUCTO }` : ''},
          CATEGORIA: {$regex: dto.filtro.CATEGORIA != undefined ? `^${dto.filtro.CATEGORIA }` : ''}
        },
      },
      {
        $skip: ( pagina - 1 ) * cantidad,
      },
      {
        $limit: cantidad
      }
    ]
    

    return await prisma.productos.aggregateRaw(
      {
        pipeline : aggregate
      }
    )
  }

  async getLastProductItemCode( ) {
    const aggregate = [
      {
        $sort: {
          ITEM: -1
        }
      },
      {
        $limit: 1
      }
    ]
    const response = await prisma.productos.aggregateRaw(
      {
        pipeline : aggregate
      }
    )
    

    return response[0]
  }

  async getLastProductByArtesano( codigoArtesana: number ) {
    const aggregate = [
      {
        $match: {
          COD_ARTESANA: codigoArtesana
        }
      },
      {
        $sort: {
          COD_ORDEN_PRO: -1
        }
      },
      {
        $limit: 1
      }
    ]
    const response = await prisma.productos.aggregateRaw( {
      pipeline: aggregate
    } )
  
    if ( response.length === 0 ) {
      return { COD_ORDEN_PRO: 1 }
    }
  
    return response[0]
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
  
  async getAllVentasRepo(dto: prismaGetAllVentas): Promise<Venta[]> {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    let filter: any = {};

    if (dto.filtro) {
        const { mes, year, COD_ARTESANA, ...otherFilters } = dto.filtro;

        // Filtrar por año o por año y mes
        if (year || mes) {
            if (year && !mes) {
                // Si hay año pero no mes, filtrar por todo el año
                const startOfYear = new Date(year, 0, 1);
                const endOfYear = new Date(year, 11, 31);

                filter = {
                    ...filter,
                    FECHA_REGISTRO: {
                        gte: startOfYear,
                        lte: endOfYear,
                    },
                };
            } else if (year && mes) {
                // Si hay año y mes, filtrar solo por el mes dentro del año
                const startOfMonth = new Date(year, mes - 1, 1);
                const endOfMonth = new Date(year, mes, 0);

                filter = {
                    ...filter,
                    FECHA_REGISTRO: {
                        gte: startOfMonth,
                        lte: endOfMonth,
                    },
                };
            } else if (!year && mes) {
                // Si solo hay mes, asumir el año actual
                const startOfMonth = new Date(currentYear, mes - 1, 1);
                const endOfMonth = new Date(currentYear, mes, 0);

                filter = {
                    ...filter,
                    FECHA_REGISTRO: {
                        gte: startOfMonth,
                        lte: endOfMonth,
                    },
                };
            }
        }

        // Filtrar por COD_ARTESANA
        if (COD_ARTESANA) {
            filter = {
                ...filter,
                COD_ARTESANA,
            };
        }

        // Aplicar otros filtros adicionales
        filter = { ...filter, ...otherFilters };
    }

    const ventas = await prisma.venta.findMany({
        where: filter,
        include: {},
    });

    return ventas;
}

}

