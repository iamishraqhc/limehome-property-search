# Limehome Properties Search App in React.js

This app is built in MERN (MongoDB, Express, React and Node) stack and is separated into two folders, one is the client (frontend) and the other is the server (backend). I have used axios in both sides. Basically, I have made the first call to the API from the server and then created a local api to be called from the frontend and thus, I ensured that the API cannot be accessed even from the browser. 

For the frontend, there were a mixture of ways for designing. Apparently, there are only two components, one is the navbar which is created with styled-components and the remaining part are made with material-ui. The favorite button also works from the frontend and based on the value, the database is updated. In case of the database, I check that, if there are no entries, then create a new entry. But if there was already an entry, then its favorite boolen value will become false and thus, those properties wont be shown from the endpoint where only the favourited ones are shown.

Here is a screenshot of the frontend.

![Screenshot](screenshot.png?raw=true)

## How to run the application

### How to start the server

Once this repo is cloned, open a terminal and run the command:

#### "cd server"

Then run:

#### "npm install"

Then create a .env file and duplicate the .env.sample file. Make sure to change the <API_URL> with the real url.

Finally, run:

#### "npm run start"

### How to start the client

Open another terminal and run the command:

#### "cd client"

Then run:

#### "npm install"

Finally, run:

#### "npm run start"
