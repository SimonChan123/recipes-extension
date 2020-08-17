const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();

const schema = buildSchema(`
    type Query {
        hello: String,
        bye: String
    }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return "HELLLO";
  },
  bye: () => {
    return "BYEEEEEE";
  },
};

// mount graphql server at endpoint https://localhost:5000/graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// if (process.env.NODE_ENV === 'production') {
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, 'client/build')));

//     // Handle React routing, return all requests to React app
//     app.get('*', function(req, res) {
//       res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//     });
//   }

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

console.log(`running graphql api server on https://localhost:${port}/graphql`);
