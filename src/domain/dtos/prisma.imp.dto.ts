import { RegistrosVentas, Users, Venta } from '@prisma/client'
import { Productos } from '@prisma/client'

export type prismaGetOneDocuemntDto = {
  filtro: Pick<Users, 'id' | 'CODIGO' >
}

export type UsersAccessCredentialsDto = Pick<Users, 'DNI' | 'CLAVE' >

export type prismaGetListDto = {
  filtro: Partial<Users>,
  pagina: number
}

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
  data: Partial<Omit<RegistrosVentas, 'id'>>,
  PRODUCTOS: Omit<Venta, 'id' | 'registrosVentasId'>[]
}