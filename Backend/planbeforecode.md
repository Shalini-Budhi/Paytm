#### Steps Backend Configuration

1. create server.js file and run

2. initiate backend using npm init -y creates package.json

3. to run server without being stoped use nodemon install nodemon and chnage script to nodemon server.js

4. to avoid boilerplate code we use express framework to cretae apis,routes,intall express

5. create app.js file and import to server and create an port all ways listen to server.js and don't forgot to add app.use(express.json())

6. to create PORT we use .env file and to import this we need to install dotenv runs direct import { } from "dotenv/config";

7. everything is working fine crete your first api in app.js but we need http methods to create so we import http and check status

8. to store DB we need to connect mongoDB

9. Creatte folder structure and in config create config.js file configur mongoDb. install mongoose also

10. Using mongoose connect method we connect DB and check status. connect using mongoDB methods.

#### SignUp Method

1. create an signUp modal to store data in DB and what are fields?
2. username,email,phonenumber,password create all required fileds and create rules
3. import into an contoller and write logic to save data if new user if existing user means show an error already email registerd
4. to bcrypt password we must hash password before saving to database so create an hashpassword in signupcontroller after that save data


#### Integration FE and BE

1. To Integrate FE and BE we use cors and we send headers in cors 


