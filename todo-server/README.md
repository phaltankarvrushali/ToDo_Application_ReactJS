# assignment-9-vrushali-phaltankar
assignment-9-vrushali-phaltankar created by GitHub Classroom

This is a simple Todo React application using the REST APIs from Assignment 8.
MongoDb is being used to store the data in backend.

Instructions to run the project:

1. Clone the repository git@github.com:neu-mis-info6150-fall-2022/assignment-9-vrushali-phaltankar.git
2. Install backend node modules (Navigate to server/): `npm i`
2. Install frontend node modules (Navigate to todo/): `npm i`
3. Run the node server (Navigate to server/): `npm start`
4. Run the react server (Navigate to todo/): `npm start`

Instructions to use the project:

1. Clone repo https://github.com/neu-mis-info6150-fall-2022/assignment-9-vrushali-phaltankar.git
2. Open terminal
3. Run npm init
4. Run node server.js to start the node
5. Connect to the database
6. Once the database is connected, start the server and add data from UI.

Project description:

1. Click on Show Tasks
2. Click on the task and view the task in detail 
3. You can mark it as completed which will strike the to-do task
4. Then you can click on Add Tasks button where you can enter the title, description, due date and time and press add
5. The task gets added to the previous task items list which will be fetched from Mongodb after clicking on Show Tasks
6. You can mark as complete the newly added To-do task

User Requirements:

1. As a user, I should be able to see all to-do items fetched using a REST API
2. As a user, I should be able to click a to-do item and able to see its detailed view
3. As a user, I should be able to open add a new to-do item view by clicking the add button
4. As a user, I should be able to add a to-do item by entering the title, description, due date, and time
5. As a user, I should be able to mark a to-do item as complete