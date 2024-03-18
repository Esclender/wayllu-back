import PrismaArtisiansImplementation from '../../../helpers/prisma/prisma.artisians.imp'

export default class GetAllArtisansApplication {
    static async execute() {
      try {
        const prismaImp = new PrismaArtisiansImplementation();
        const artisans = await prismaImp.getArtisiansListRepo({
          filtro: {} 
        });
        return artisans;
      } catch (error) { console.error('Error al obtener artesanos:', error);
        throw error;
      }
    }
  }