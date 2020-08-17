const functions = require("firebase-functions");
const app = require('express')();
const FBAuth = require('./util/fbAuth');
const cors = require('cors');

app.use(cors());

const { getAllRecipeLists, createNewRecipeList, getList, addToList, deleteList } = require('./handlers/recipeLists');
const { signup, login } = require('./handlers/users');

// get lists and make list(s) routes - [lists route]
app.get('/lists', FBAuth, getAllRecipeLists);
app.post('/lists', FBAuth, createNewRecipeList);
app.get('/lists/:listID', FBAuth, getList);
app.post('/lists/:listID', FBAuth, addToList);
app.delete('/lists/:listID', FBAuth, deleteList);

// simple sign up route and login route - [user routes]
app.post('/signup', signup);
app.post('/login', login);

// handle multiplate routes
exports.api = functions.https.onRequest(app);
