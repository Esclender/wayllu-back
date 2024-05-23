import { Users, Venta } from '@prisma/client'
import { Productos } from '@prisma/client'

export type prismaGetOneDocuemntDto = {
  filtro: Pick<Users, 'id' >
}

export type UsersAccessCredentialsDto = Pick<Users, 'DNI' | 'CLAVE' >

export type prismaGetListDto = {
  filtro: Partial<Users>,
  pagina: number
}

export type prismaUpdateImageDto = {
  idArtisian: string;
  URL_IMAGE: string;
};

export type prismaPostDto = {
  UsersData: Users
}

export type prismaPutDto = {
  idUser: Partial<string>
  UsersDataToUpdate: prismaPutUsersData
}

export type prismaPutUsersData = Partial<Omit<Users, 'id' | 'DNI' | 'FECHA_REGISTRO'>>

//METHODS FOR PRODUCTS

export type prismaGetOneProductDto = {
  filtro: Pick<Productos, 'id' | 'COD_PRODUCTO'>
}

export type prismaGetListProductsDto = {
  filtro: Partial<Productos>
}

export type prismaPostProductDto = {
  ProductData: Productos
}

export type prismaPutProductDto = {
  idProduct: Partial<string>
  ProductDataToUpdate: prismaPutProductData
}

export type prismaPutProductData = Partial<Omit<Productos, 'id' | 'FECHA_INGRESO'>>

export type prismaDeleteProductDto = {
  id: string
}


export type prismaProductoVendido = {
  CANTIDAD_TOTAL_PRODUCTOS: number,
  PRODUCTOS: Omit<Venta, 'id' | 'registrosVentasId'>[] 
}

export type prismaProductosVenta = {
  PRODUCTOS: Omit<Venta, 'id' | 'registrosVentasId'>[]
}

export type prismaGetAllVentas = {
  filtro?: Partial<Venta> & { year?: number; mes?: number }; 
};
//  & { URL_IMAGE?: string | null }; // Hacer URL_IMAGE opcional en artisianDataToUpdate