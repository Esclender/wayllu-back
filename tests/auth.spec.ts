import request from "supertest";
import server from "../src/server"
import {
  authUserCredentialsWithFirebase,
} from './../src/helpers';

describe("Auth Tests", () => {

  // test("AUTH USER WITH VALID CREDENTIALS IN FIREBASE", done => {
  //   const validCredentials = {
  //     dni: "488590699",
  //     clave: "1234"
  //   }

    

  //   authUserCredentialsWithFirebase(validCredentials)
  //     .then( res => {
  //       expect(res.statusCode).toBe(200)
  //     })
  // });


  test("GET JWT", done => {
    request(server)
      .post("/login")
      .send({
        dni: "488966333",
        clave: "1234."
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("tokenAccesso")
        done();
      });
  });


});
