import request from "supertest";
import server from "../src/server"
import {PrismaImplementation, createJwt} from '../src/helpers'
const prismaImp = new PrismaImplementation()


describe("Auth Tests", () => {


  test("Get Logged user data", done => {
    
    const credentials = {
      DNI: 44750328,
      CLAVE: ""
    }

    const expectedUserData = {
      "id": "65f1140219bf94606595fe8d",
      "NOMBRE_COMPLETO": "Hilda Echame",
      "DNI": 44750328,
      "COMUNIDAD": "Huilloc",
      "CDG_COMUNIDAD": 1,
      "CODIGO": "1001",
      "URL_IMAGE": "gs://wayllu.appspot.com/Artisans_Images/img1.jpeg",
      "CLAVE": "",
      "EMAIL": null,
      "FECHA_REGISTRO": new Date("2024-03-19T12:17:28.950Z")
    }

    prismaImp.getArtisianDataByCredentialsRepo(credentials)
      .then(res => {
        expect(res).toEqual(expectedUserData)
        done()
      })


  });

  test("Create JWT", done => {
    const userData = {
      "id": "65f1140219bf94606595fe8d",
      "NOMBRE_COMPLETO": "Hilda Echame",
      "DNI": 44750328,
      "COMUNIDAD": "Huilloc",
      "CDG_COMUNIDAD": 1,
      "CODIGO": 1001,
      "EMAIL": "",
      "FECHA_REGISTRO": new Date("2024-03-19T12:17:28.950Z")
    }

    const tokenGenerated = createJwt(userData)


    expect(tokenGenerated).not.toBeNull()
    expect(tokenGenerated).not.toBe(undefined)
    done()

  });


  test("GET JWT", done => {
    const credentials = {
      DNI: 44750328,
      CLAVE: ""
    }


    request(server)
      .post("/api/auth/login")
      .send(credentials)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("tokenAccesso")
        expect(response.body.tokenAccesso).not.toBeNull()
        done();
      });
  });


});
