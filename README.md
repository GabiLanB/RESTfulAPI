# RESTfulAPI
MongoDB, Express, AngularJs, NodeJS

Steps : 
- Download & Install Nodejs https://nodejs.org/
- Download & Install MongoDB https://www.mongodb.com/ (Custom  - C:\MongoDB\ )
  - in MongoDB\ create a folder "log" and a folder "data\db"
  - Open CMD (Run as administrator) and navigate to MongoDB\bin 
  - run "mongod --directoryperdb --dbpath C:\MongoDB\data\db --logpath C:\MongoDB\log\mongo.log --logappend --rest --install"
  - run "net start MongoDB" (now MongoDB it's running in the background like a service)
- Also is good to have Git Bash https://git-scm.com/
- populate the database
  - in CMD MongoDB\bin run "mongo" (now you are in the shell :) )
  - run "show dbs" to see the databases 
  - "use moviestore" to create a new database
  - "db.createCollection('movies')" to create a new collection
  - populate: "db.movies.insert({ some data })" - open the datamovies.txt for a quick add info
    - from datamovies.txt you have to run line by line
  - see the results with "db.movies.find().pretty()"
- In the RESTfulAPI download folder open Git Bash Here and run:
  - npm install
  - npm install -g nodemon
  - run "nodemon" or "node app"
- Open http://localhost:8080/
- Enjoy :)



