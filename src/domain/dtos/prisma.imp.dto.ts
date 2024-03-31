import { Users } from '@prisma/client'


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