import { Venta } from "@prisma/client"
import PrismaProductsImplementation from "../../../helpers/prisma/prisma.products.imp"


export default class GetAllVentas {
    static async execute(prop : number | null, mes: number|null, semana: number |null ): Promise<Venta[]> {
      const prismaImp = new PrismaProductsImplementation();
      const response : any = await prismaImp.getAllVentasRepo( { 
        filtro: {
          COD_PRODUCTO: prop ?? undefined,
          mes: mes ?? undefined,
          semana: semana?? undefined
        }
      } ) 
      
  
      return response.map(( venta: any ) => {
        const {_id, FECHA_REGISTRO, ...DATA} = venta
       
  
        return {
        
          FECHA_REGISTRO: FECHA_REGISTRO,
          ...DATA
        }
      } )
    }
  }