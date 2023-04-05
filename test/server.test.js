//tests written with ChatGPT
const chai = require("chai");
const expect = chai.expect;
const app = require("../server");
const axios = require("axios");

describe("Server", () => {
  before(async () => {
    // Wait for the database to connect and the server to start before running the tests
    await require("../config/database");
    return new Promise(resolve => setTimeout(resolve, 1000)); // add a delay of 3 seconds before running the tests
  });

  it("should return a 200 response for GET /api/artworks", async () => {
    const response = await axios.get("http://localhost:3001/api/artworks");
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


  after(() => {
    // Close the server after running the tests
    console.log('Ctrl-C to close server');
  });

});

let baseUrl = "http://localhost:3001/api/artworks";

describe("Artworks API", () => {
//   describe("POST /api/artworks", () => {
//     it("should create a new artwork", async () => {
//       const artworkData = { /* insert artwork data here */ };
//       const response = await axios.post(baseUrl, artworkData);
//       expect(response.status).to.equal(201);
//       expect(response.data).to.have.property("id");
//       // Add additional assertions to test the response data
//     });
//   });

  describe("GET /api/artworks", () => {
    it("should return an array of artworks", async () => {
      const response = await axios.get(baseUrl);
      expect(response.status).to.equal(200);
      expect(response.data).to.be.an("array");
      // Add additional assertions to test the response data
    });
  });

//   describe("GET /api/artworks/:id", () => {
//     it("should return an artwork with the given ID", async () => {
//       const artworkId = "insert artwork ID here";
//       const response = await axios.get(`${baseUrl}/${artworkId}`);
//       expect(response.status).to.equal(200);
//       expect(response.data).to.have.property("id", artworkId);
//       // Add additional assertions to test the response data
//     });
//   });

//   describe("DELETE /api/artworks/:id", () => {
//     it("should delete the artwork with the given ID", async () => {
//       const artworkId = "insert artwork ID here";
//       const response = await axios.delete(`${baseUrl}/${artworkId}`);
//       expect(response.status).to.equal(204);
//       // Add additional assertions to test that the artwork has been deleted
//     });
//   });

//   describe("PUT /api/artworks/:id", () => {
//     it("should update the artwork with the given ID", async () => {
//       const artworkId = "insert artwork ID here";
//       const artworkData = { /* insert updated artwork data here */ };
//       const response = await axios.put(`${baseUrl}/${artworkId}`, artworkData);
//       expect(response.status).to.equal(200);
//       // Add additional assertions to test that the artwork has been updated
//     });
//   });
});

baseUrl = "http://localhost:3001/api/exhibitions";

describe("Exhibitions API", () => {
//   describe("POST /api/exhibitions", () => {
//     it("should create a new exhibition", async () => {
//       const exhibitionData = { /* insert exhibition data here */ };
//       const response = await axios.post(baseUrl, exhibitionData);
//       expect(response.status).to.equal(201);
//       expect(response.data).to.have.property("id");
//       // Add additional assertions to test the response data
//     });
//   });

  describe("GET /api/exhibitions", () => {
    it("should return an array of exhibitions", async () => {
      const response = await axios.get(baseUrl);
      expect(response.status).to.equal(200);
      expect(response.data).to.be.an("array");
      // Add additional assertions to test the response data
    });
  });

//   describe("GET /api/exhibitions/:id", () => {
//     it("should return an exhibition with the given ID", async () => {
//       const exhibitionId = "insert exhibition ID here";
//       const response = await axios.get(`${baseUrl}/${exhibitionId}`);
//       expect(response.status).to.equal(200);
//       expect(response.data).to.have.property("id", exhibitionId);
//       // Add additional assertions to test the response data
//     });
//   });

//   describe("DELETE /api/exhibitions/:id", () => {
//     it("should delete the exhibition with the given ID", async () => {
//       const exhibitionId = "insert exhibition ID here";
//       const response = await axios.delete(`${baseUrl}/${exhibitionId}`);
//       expect(response.status).to.equal(204);
//       // Add additional assertions to test that the exhibition has been deleted
//     });
//   });

//   describe("PUT /api/exhibitions/:id", () => {
//     it("should update the exhibition with the given ID", async () => {
//       const exhibitionId = "insert exhibition ID here";
//       const exhibitionData = { /* insert updated exhibition data here */ };
//       const response = await axios.put(`${baseUrl}/${exhibitionId}`, exhibitionData);
//       expect(response.status).to.equal(200);
//       // Add additional assertions to test that the exhibition has been updated
//     });
//   });
});



baseUrl = "http://localhost:3001/api/locations";

describe("Locations API", () => {
  // describe("POST /api/locations", () => {
  //   it("should create a new location", async () => {
  //     const locationData = { /* insert location data here */ };
  //     const response = await axios.post(baseUrl, locationData);
  //     expect(response.status).to.equal(201);
  //     expect(response.data).to.have.property("id");
  //     // Add additional assertions to test the response data
  //   });
  // });

  describe("GET /api/locations", () => {
    it("should return an array of locations", async () => {
      const response = await axios.get(baseUrl);
      expect(response.status).to.equal(200);
      expect(response.data).to.be.an("array");
      // Add additional assertions to test the response data
    });
  });

  // describe("DELETE /api/locations/:id", () => {
  //   it("should delete the location with the given ID", async () => {
  //     const locationId = "insert location ID here";
  //     const response = await axios.delete(`${baseUrl}/${locationId}`);
  //     expect(response.status).to.equal(204);
  //     // Add additional assertions to test that the location has been deleted
  //   });
  // });

  // describe("PUT /api/locations/:id", () => {
  //   it("should update the location with the given ID", async () => {
  //     const locationId = "insert location ID here";
  //     const locationData = { /* insert updated location data here */ };
  //     const response = await axios.put(`${baseUrl}/${locationId}`, locationData);
  //     expect(response.status).to.equal(200);
  //     // Add additional assertions to test that the location has been updated
  //   });
  // });
});

baseUrl = "http://localhost:3001/api/map/directions";

describe("Explorer API", () => {
  describe("GET /api/map/directions", () => {
    it("should return directions for the given start and end locations", async () => {
      const startLocation = "insert start location here";
      const endLocation = "insert end location here";
      const response = await axios.get(`${baseUrl}?start=${startLocation}&end=${endLocation}`);
      expect(response.status).to.equal(200);
      // Add additional assertions to test the response data
    });
  });
});