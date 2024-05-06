import * as admin from 'firebase-admin';
import path from 'path';

// Carga las credenciales del servicio desde el archivo JSON
const serviceAccount = require("../wayllu-firebase-log.json");

export default class FirebaseHelper {
  static async uploadImage(IMAGE_URL: string): Promise<string> {
    try {
        // Inicializar Firebase Admin SDK con las credenciales cargadas
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          storageBucket: "wayllu.appspot.com"
        });
      
        console.log("Firebase Admin SDK inicializado correctamente");
      
        const bucket = admin.storage().bucket();
        // Generar un nombre de archivo único para la imagen
        const fileName = `${path.basename(IMAGE_URL)}`;
        // Especificar la ruta de destino dentro de la carpeta "images"
        const destination = `Artisans_Images%2F${fileName}?alt=media&token`; 
        
        console.log(IMAGE_URL)
        // Subir la imagen al repositorio de Firebase Storage
        await bucket.upload(IMAGE_URL, {
          destination: "Artisans_Images/"+fileName
        });

        // Obtener el enlace de descarga de la imagen subida
        const uploadedImageUrl = `https:///firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${destination}`;

        console.log('Imagen subida correctamente a Firebase Storage');
      
        return uploadedImageUrl;

      } catch (error) {
        console.error("Error al inicializar Firebase Admin SDK o al subir la imagen:", error);
        // Manejar el error apropiadamente
        throw error;
      }
  }
}