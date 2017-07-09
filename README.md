# RESTfulAPI
MongoDB, Express, AngularJs, NodeJS

Steps : 
- Download & Install Nodejs https://nodejs.org/
- Download & Install MongoDB https://www.mongodb.com/
  - in MongoDB\Server\3.4 create a folder "log" and a folder "data\db"
- Also is good to have Git Bash https://git-scm.com/
- populate the database
  - Open CDM (Run as administrator) and navigate to MongoDB\Server\3.4\bin and run "mongo"
  - type "use moviestore" to create a new database
  - "db.createCollection(movies)" to create a new collection
  - populate: "db.movies.insert({ some data })" - open the datamovies.txt for a quick add info
  - see the results with "db.movies.find().pretty()"
- In the RESTfulAPI download folder open Git Bash Here and run:
  - npm install
  - npm install -g nodemon
  - run "nodemon" or "node app"
- Open http://localhost:8080/
- Enjoy :)



