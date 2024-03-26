import Artisian from '../entities/artisianUser.entity'

export type prismaGetOneDocuemntDto = {
  filtro: Pick<Artisian, 'id' | 'CODIGO' >
}

export type userAccessCredentialsDto = Pick<Artisian, 'DNI' | 'CLAVE' >

export type prismaGetListDto = {
  filtro: Partial<Artisian >
}

export type prismaPostDto = {
  artisianData: Artisian
}

export type prismaPutDto = {
  idArtisian: Partial<string>
  artisianDataToUpdate: prismaPutUserData
}

export type prismaPutUserData = Partial<Omit<Artisian, 'id' | 'DNI' | 'FECHA_REGISTRO'>>