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
// Importar Prisma y otros módulos necesarios
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Controlador para obtener todos los artesanos
async function getAllArtisans(req: Request, res: Response) {
    try {
        // Consultar todos los artesanos desde la base de datos
        const allArtisans = await prisma.artisans.findMany();

        // Devolver la lista de artesanos como respuesta
        res.status(200).json(allArtisans);
    } catch (error) {
        // Manejar errores si ocurren
        console.error('Error al obtener todos los artesanos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Exportar el controlador para su uso en las rutas
export default {
    getAllArtisans
};