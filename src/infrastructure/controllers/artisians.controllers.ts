import { expressControllersDto } from '../../domain/dtos'
import { GetArtisianApplication } from '../applications'
import { GetAllArtisansApplication } from '../applications'
/*
export default class ArtisiansControllers {
  /*async getArtisianByDni( dto: expressControllersDto ) {
    const artisianData = await GetArtisianApplication.execute()
    return dto.res.status( 200 ).json( artisianData )

  }
  async getAllArtisian(dto: expressControllersDto) {
    try {
      const artisianAllData = await GetAllArtisansApplication.execute();
      return dto.res.status(200).json(artisianAllData);
    } catch (error) {
      console.error('Error al obtener todos los artesanos:', error);
      return dto.res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}*/
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Controlador para obtener todos los artesanos
async function getAllArtisans(dto:expressControllersDto) {
    try {
        const allArtisans = await prisma.artisans.findMany();

        dto.res.status(200).json(allArtisans);
    } catch (error) {
        console.error('Error al obtener todos los artesanos:', error);
        dto.res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export default {
    getAllArtisans
};