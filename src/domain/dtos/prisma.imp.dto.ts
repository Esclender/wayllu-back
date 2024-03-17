import Artisian from '../entities/artisianUser.entity'

export type prismaGetOneDocuemntDto = {
  filtro: Pick<Artisian, 'id' | 'CODIGO' >
}

export type prismaGetListDto = {
  filtro: Partial<Artisian >
}

export type prismaPostDto = {
  artisianData: Artisian
}

export type prismaPutDto = {
  idArtisian: Partial<string>
  codigoArtisian: number
  artisianDataToUpdate: Artisian
}
