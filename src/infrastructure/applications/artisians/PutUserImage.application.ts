import { prismaUpdateImageDto } from '../../../domain/dtos';
import { PrismaImplementation } from '../../../helpers';
import FirebaseHelper from '../../../helpers/FirebaseHelper';
import PrismaArtisiansImplementation from '../../../helpers/prisma/prisma.artisians.imp';
import { Request, Response } from 'express';

export default class UpdateArtisanImage {
  static async execute( dto: prismaUpdateImageDto ) {
      // Subir la imagen al repositorio de Firebase
      const uploadedImageUrl = await FirebaseHelper.uploadImage(dto.URL_IMAGE);
      // Actualizar la URL de la imagen en la base de datos utilizando Prisma
      const prismaImp = new PrismaImplementation();
      await prismaImp.updateArtisianImage({ idArtisian: dto.idArtisian, URL_IMAGE: uploadedImageUrl });
      return uploadedImageUrl; // Devuelve la URL de la imagen subida
  }
/*     static async execute(req: Request, dto: prismaUpdateImageDto): Promise<string> {
        try {
            const { idArtisian, URL_IMAGE } = dto;

            // Actualizar la URL de la imagen en la base de datos utilizando Prisma
            const prismaImp = new PrismaArtisiansImplementation();
            const updateDto: prismaUpdateImageDto = {
                idArtisian: idArtisian,
                URL_IMAGE: URL_IMAGE
            };
            await prismaImp.updateArtisianImage(updateDto);

            // Subir la nueva imagen al repositorio de Firebase
            const uploadedImageUrl = await FirebaseHelper.uploadImage(URL_IMAGE);

            return uploadedImageUrl; // Devuelve la URL de la imagen subida
        } catch (error) {
            console.error('Error al actualizar la imagen del artesano:', error);
            throw error;
        }
    } */
}
