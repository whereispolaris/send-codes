# Send Codes :computer:
### Coding Snippets For Full Stack Development Projects

https://send-codes.herokuapp.com/

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node
- Contentful
- Passport.js



## Installation

This app uses a Mongo Database called `sendCodesUsers` with a collection called `users`. Authentication will not work without creating this database. 

Create a .env file in the root directory. Sign up for Contentful and put the API keys in the .env file using the following format:

```
# Contentful
CONTENTFUL_SPACE=XXXXXXXXXX
CONTENTFUL_ACCESSTOKEN=XXXXXXXXXX
```

Install front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
