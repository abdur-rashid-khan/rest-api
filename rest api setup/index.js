const express = require("express");
require('dotenv').config();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require('jsonwebtoken');
const app = express();
const errorHandler = require("./middleware/errorHandler");
const userRouter = require('./routes/user.route.js')
require('./config/dbConnect')

const config = require('./config/config');
const PORT = config.app.port;

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
//user  route
app.use("/api/v1/user",userRouter);



// post products 
app.use("/api/v1/products",userRouter)



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/./views/index.html')
})


// server listen
app.listen(PORT, () => {
  console.log(`localhost ${PORT}`) 
})

// for 404 router
app.all('*', (req, res) => {
  res.status(404).send('No Route Found')
})


//Global error handler
app.use(errorHandler)




// unexpected error handler
// process.on('unhandledRejection', (error) => {
//   console.log(error, error.messages);
//   app.close(() => {
//     process.exit(1)
//   })
// })