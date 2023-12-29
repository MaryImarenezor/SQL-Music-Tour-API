# Music-Tour-API: SQL Lab

PROMPT: Create an API where different Concert Tours from different artists are displayed

SKILLS: pgAdmin, SQL, Sequelize, Sequelize CLI, JS, Postman

PROCESS:
- I plotted out and created a simple local database in pgAdmin using primary keys, foriegn keys, and multiple tables. For this assignment, I used 3 pieces of data for each table.
- I connected the backend database with a localhost server by using Sequelize and Sequelize CLI.
- Sequelize was used to connect between the SQL database & the server and access the SQL database easily
- Sequelize CLI was used to generate the models and the migration files
- I wrote controllers for the Band, Event, and Stage models. I followed an acticity guide provided to write the Band controller, but I wrote the Event and Stage controller by myself
-
-
-
-
-
-

OUTPUT:
- when going into the localhost server on Postman/Browser, it should display the data of the databases
- to start the server, open the terminal in IDE terminal and type nodemon server.js

ROUTES:
http://localhost:3000/ - a welcome message into the music API

http://localhost:3000/bands - all of the data from the "bands" table. Base URL for the bands_controller and Band model
http://localhost:3000/bands:id - used to select, update, delete, and create a specific band with an ID
http://localhost:3000/bands?name=bandname - used to find a band with a spesific band name

http://localhost:3000/stages - all of the data from the "stages" table. Base URL for the stages-controller and the Stage model
http://localhost:3000/stages:id - used to select, update, delete, and create a specific band with an ID

http://localhost:3000/events - all of the data from the "events" table. Base URL for the events-controller and the Event model
http://localhost:3000/events:id - used to select, update, delete, and create a specific band with an ID

