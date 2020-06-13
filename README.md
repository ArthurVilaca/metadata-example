### order of execution

To perform the entire process of downloading files and filling out the database, follow the steps:

#### Download the files
  just exec `node download_files.js` or `npm run download`


#### extract the books
  just exec `node extract.js` or `npm run extract`


#### copy .env.sample to .env file

#### migrate books to database
  just exec `node process.js` or `npm run process`



### tests

to run the tests clear the content of the books folders, the run `npm run test` or reset the repository `git reset --hard` and then run `run run test`

### coverage

to run the tests clear the content of the books folders, the run `npm run coverage` or reset the repository `git reset --hard` and then run `run run coverage`