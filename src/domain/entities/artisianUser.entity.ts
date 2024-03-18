import mongoose, { Document } from 'mongoose';
export default interface Artisans {
  CDG_COMUNIDAD: number;
  CODIGO: number;
  COMUNIDAD: string;
  DNI: number | null;
  NOMBRE_COMPLETO: string;
  URL_IMAGE: string | null;
  id: string;
}


const artisanSchema = new mongoose.Schema({
    CDG_COMUNIDAD: { type: Number, required: true },
    CODIGO: {type: Number, required: true, unique: true},
    COMUNIDAD: { type: String, required: true },
    DNI: { type: Number, required: true },
    NOMBRE_COMPLETO:{ type: String, required: true },
    URL_IMAGE: { type: String, required: false },
    id: { type: String, required: true },
});
const ArtisianModel = mongoose.model<Artisans>('Artisan', artisanSchema );

