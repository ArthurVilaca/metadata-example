const chai = require('chai');
const axios = require("axios");
const expect = chai.expect;

describe('simple api teste', () => {

  it('Should test if api is online', (done) => {
    axios.get('http://localhost:3000')
      .then(function (response) {

        expect(response.data).to.equal('it works');
        expect(response.status).to.equal(200);
        done()
      });
  })
})