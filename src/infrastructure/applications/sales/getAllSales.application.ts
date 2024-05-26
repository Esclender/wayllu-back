import { Venta } from "@prisma/client"
import PrismaProductsImplementation from "../../../helpers/prisma/prisma.products.imp"


export default class GetAllVentas {
    static async execute(pagina : number, prop : number | null, year: number |null, mes: number|null): Promise<Venta[]> {
      const prismaImp = new PrismaProductsImplementation();
      const response : any = await prismaImp.getAllVentasRepo( { 
        pagina ,
        filtro: {
          COD_PRODUCTO: prop ?? undefined,
          year: year?? undefined,
          mes: mes ?? undefined,
          
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