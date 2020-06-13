const execSync = require('child_process').execSync;

function downloadFiles() {
  let command = 'wget http://www.gutenberg.org/cache/epub/feeds/rdf-files.tar.zip'
  code = execSync(command, {
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024
  });

  let command = 'wget http://www.gutenberg.org/cache/epub/feeds/rdf-files.tar.bz2'
  code = execSync(command, {
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024
  });
  console.log('all files downloaded')
}

downloadFiles()