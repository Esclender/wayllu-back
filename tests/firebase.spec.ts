// test/FirebaseHelper.test.ts
import FirebaseHelper from '../src/helpers/FirebaseHelper'; // Ruta al archivo FirebaseHelper que contiene la función uploadImage

async function testUploadImage() {
  try {
    // Llamar a la función uploadImage desde el archivo de prueba
    const imageUrl = await FirebaseHelper.uploadImage('../../../prueba.jpg');
    console.log('Imagen subida correctamente:', imageUrl);
  } catch (error) {
    console.error('Error al subir la imagen:', error);
  }
}

testUploadImage(); // Llama a la función para realizar la prueba
