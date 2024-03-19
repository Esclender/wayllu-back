import request from "supertest";
import server from "../src/server"

describe("Artesanos Tests", () => {
  test("GET ALL ARTISIANS", done => {
    request(server)
      .get("/api/artesanos")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.exitoso).toBe(true)
        expect(response.body.info.length).toEqual(144)
        done();
      });
  });



});
