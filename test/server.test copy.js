import { test, before, after } from 'vitest';
import chai from 'chai';
import axios from 'axios';
import app from '../server';

const expect = chai.expect;

test('Server', {
  async before() {
    // Wait for the database to connect and the server to start before running the tests
    await require('../config/database');
    return new Promise(resolve => setTimeout(resolve, 1000)); // add a delay of 3 seconds before running the tests
  },

  async 'should return a 200 response for GET /api/artworks'() {
    const response = await axios.get('http://localhost:3001/api/artworks');
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
  },

  async 'should return a 404 response for GET /api/non-existent-endpoint'() {
    try {
      await axios.get('http://localhost:3001/api/non-existent-endpoint');
    } catch (error) {
      expect(error.response.status).to.equal(404);
      expect(error.response.data.message).to.equal('Not Found');
    }
  },

  after() {
    // Close the server after running the tests
    console.log('Ctrl-C to close server');
  },
});

let baseUrl = 'http://localhost:3001/api/artworks';

test('Artworks API', {
  async 'GET /api/artworks'() {
    const response = await axios.get(baseUrl);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
    // Add additional assertions to test the response data
  },
});

baseUrl = 'http://localhost:3001/api/exhibitions';

test('Exhibitions API', {
  async 'GET /api/exhibitions'() {
    const response = await axios.get(baseUrl);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
    // Add additional assertions to test the response data
  },
});

baseUrl = 'http://localhost:3001/api/locations';

test('Locations API', {
  async 'GET /api/locations'() {
    const response = await axios.get(baseUrl);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
    // Add additional assertions to test the response data
  },
});

baseUrl = 'http://localhost:3001/api/map/directions';

test('Explorer API', {
  async 'GET /api/map/directions'() {
    const startLocation = 'insert start location here';
    const endLocation = 'insert end location here';
    const response = await axios.get(`${baseUrl}?start=${startLocation}&end=${endLocation}`);
    expect(response.status).to.equal(200);
    // Add additional assertions to test the response data
  },
});
