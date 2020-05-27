const { getByCategory } = require("./recipeMiddleware");
const supertest = require("supertest");

const server = require("../api/server.js");
const db = require("../data/dbConfig");

// afterEach(async () => {
//   await db("recipes").truncate();
// });

describe('Recipe Middleware', () => {
  describe("getByCategory", () => {
    // it("Should return status 200", () =>{
    //   return supertest()
    // })
    it("can run the tests", () => {
      expect(true).toBeTruthy();
    });

    it("returns status code", () => {
      return supertest(server)
      .get("/")
      .then(response => {
        expect(response.status).toBe(200);
      })
    });
  })
})
