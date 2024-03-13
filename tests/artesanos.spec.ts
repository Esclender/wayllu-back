import request from "supertest";
import server from "../src/server"

describe("Artesanos Tests", () => {
  test("", done => {
    request(server)
      .get("/artesanos")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Artesanos body response", done => {
    request(server)
      .get("/artesanos")
      .then(response => {
        expect(response.body).toEqual({
          exitoso: true
        });
        done();
      });
  });


});
