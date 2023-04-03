const chai = require("chai");
const expect = chai.expect;
const app = require("../server");
const axios = require("axios");

describe("Server", () => {
  before(async () => {
    // Wait for the database to connect and the server to start before running the tests
    await require("../config/database");
    return new Promise(resolve => setTimeout(resolve, 1800)); // add a delay of 3 seconds before running the tests
  });

  it("should return a 200 response for GET /api/users", async () => {
    const response = await axios.get("http://localhost:3001/api/users");
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an("array");
  });

  it("should return a 404 response for GET /api/non-existent-endpoint", async () => {
    try {
      await axios.get("http://localhost:3001/api/non-existent-endpoint");
    } catch (error) {
      expect(error.response.status).to.equal(404);
      expect(error.response.data.message).to.equal("Not Found");
    }
  });

  it("should return a 403 response for GET /api/secret without authentication", async () => {
    try {
      await axios.get("http://localhost:3001/api/secret");
    } catch (error) {
      expect(error.response.status).to.equal(403);
      expect(error.response.data.message).to.equal("sorry");
    }
  });

  after(() => {
    // Close the server after running the tests
    app.close();
  });
});
