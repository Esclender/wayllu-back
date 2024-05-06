import { PrismaClient, Productos, RegistrosVentas, Venta } from '@prisma/client'
import { 
  prismaGetAllVentas,
  prismaGetListProductsDto,
  prismaGetOneProductDto, 
  prismaPostProductDto, 
  prismaProductoVendido, 
  prismaPutProductDto,
} from '../../domain/dtos'

import { IProductRepository } from '../../domain/interfaces/repositories'
import { GenerateUuid } from '..'
import { getEndDateOfWeek, getStartDateOfWeek, getWeekDates } from '../week/getWeek'

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
 
  async getAllVentasRepo(dto: prismaGetAllVentas): Promise<Venta[]> {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const weeksInMonth: Date[][] = [];

    for (let week = 1; week <= 5; week++) { 
      weeksInMonth.push(getWeekDates(currentYear, currentMonth, week));
  }

    let filter: any = {};
    if (dto.filtro) {
        const { mes, semana, ...otherFilters } = dto.filtro;
        if (mes && semana) {
          const startDate = getStartDateOfWeek(semana, mes, currentYear); // Obtener fecha de inicio de la semana
          const endDate = getEndDateOfWeek(semana, mes, currentYear); // Obtener fecha de fin de la semana

          filter = {
              AND: [
                  { FECHA_REGISTRO: { gte: startDate } },
                  { FECHA_REGISTRO: { lte: endDate } }
              ]
          };
      }
        if (mes) {
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

        filter = { ...filter, ...otherFilters };
    }

    const ventas = await prisma.venta.findMany({
        where: filter,
        include: {},
    });

    return ventas;
}
  
  }

