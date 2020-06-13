const execSync = require('child_process').execSync;
const chai = require('chai');
require('dotenv').config()
const expect = chai.expect;
const fs = require('fs');

const db = require('../app/db');
const process = require('../process')

describe('simple processing test', () => {
  it('expect to process xml and create the record on databese', async () => {
    await process.execute()

    let books = await db.Books.findAndCountAll()
    expect(books.count).to.equal(1)
    expect(books.rows[0].title).to.equal('The Declaration of Independence of the United States of America')
  })
})
