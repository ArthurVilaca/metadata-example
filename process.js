const xml2js = require('xml2js')
const fs = require('fs')
const parser = new xml2js.Parser();
require('dotenv').config()

const db = require('./app/db')

var all_books = []

function getFiles(url) {
  files = fs.readdirSync(url);
  files.forEach((item) => {
    if (['.gitkeep', 'rdf-files.tar', 'rdf-files.tar.zip'].indexOf(item) === -1) {
      if (item.indexOf('.rdf') === -1 && fs.existsSync(url + '/' + item)) {

        getFiles(url + '/' + item)
      } else {

        processFile(url + '/' + item)
      }
    }
  })
}

function processFile(file) {
  var contents = fs.readFileSync(file, 'utf8');

  parser.parseString(contents, async function (err, result) {
    if (err) console.log(err)

    file = result['rdf:RDF']
    ebook = file['pgterms:ebook'][0]

    let authors = []
    let subjects = []
    if (ebook['dcterms:creator']) {
      ebook['dcterms:creator'].forEach((item) => {
        if (item['pgterms:agent'])
          authors = item['pgterms:agent'].map(element => {
            return element['pgterms:name'][0]
          });
      })
    }

    if (ebook['dcterms:subject']) {
      ebook['dcterms:subject'].forEach((item) => {
        subjects = item['rdf:Description'].map((description) => {
          if (item['rdf:Description'])
            return description['rdf:value'][0]
        })
      })
    }

    all_books.push({
      title: ebook['dcterms:title'][0],
      author: authors.join(';'),
      publisher: ebook['dcterms:publisher'][0],
      publication_date: ebook['dcterms:issued'][0]['_'],
      language: ebook['dcterms:language'][0]['rdf:Description'][0]['rdf:value'][0]['_'],
      subject: subjects.join(';'),
      license_rights: ebook['dcterms:rights'][0]
    })
  })
}

async function saveOnDatabase() {
  for (let book of all_books) {
    await db.Books.create(book)
  }
}

async function execute() {
  console.log('file 1')
  getFiles(__dirname + '/books/book1')
  console.log('saving 1', all_books.length)
  await saveOnDatabase()
  all_books = []
  
  console.log('file 2')
  getFiles(__dirname + '/books/book2')
  console.log('saving 2', all_books.length)
  await saveOnDatabase()
}

module.exports = { execute };