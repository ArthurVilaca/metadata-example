const execSync = require('child_process').execSync;

function extract() {
  let command = 'unzip ./books/rdf-files.tar.zip -d ./books/book1'
  code = execSync(command, {
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024
  });

  let command = 'tar xvf ./books/book1/rdf-files.tar -C ./books/book1'
  code = execSync(command, {
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024
  });

  let command = 'tar -xvjf ./books/rdf-files.tar.bz2 -C ./books/book2'
  code = execSync(command, {
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024
  });
}

extract()