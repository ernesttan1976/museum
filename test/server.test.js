const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest(require('../server.js'))

describe("GET /api/artworks", () => {
  it("should return a 200 response", done => {
    api
      .get("/api/artworks")
      .set("Accept", "application/json")
      .expect(200, done)
  })
})