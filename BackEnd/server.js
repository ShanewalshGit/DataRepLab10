const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

// Locate the build folder and use it as a static folder
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// Avoid a CORS error occuring
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// for body parsing
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Mongoose setup
const mongoose = require('mongoose');
const { request } = require('http');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@shanescluster.bayvtko.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Establish Schema
const bookSchema = new mongoose.Schema({
    title:String,
    cover:String,
    author:String
});

// Create book model using mongoose
const bookModel = mongoose.model('books', bookSchema);

// Update book data based on id
app.put('/api/book/:id', async(req,res)=>{
    console.log("Update: "+req.params.id);
    let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(book);
})

// Delete book data based on id
app.delete('/api/book/:id', async(req,res)=>{
    console.log("Delete: "+req.params.id);
    let book = await bookModel.findByIdAndDelete(req.params.id);
    res.send(book);
})


// returns welcome message to the base url for our server
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

// returns "Hello " with the selected name you've slotted into the url
app.get('/hello/:name', (req,res) =>{
    console.log(req.params.name);
    res.send("Hello "+ req.params.name);
})

// returns book json data
app.get('/api/books', async (req,res) =>{
    let books = await bookModel.find({});
    res.json(books);
})

// returns bookdata from bookModel based on id
app.get('/api/book/:id', async (req,res)=>{
    console.log(req.params.id);

    let book = await bookModel.findById({_id:req.params.id});
    res.send(book);
})

// returns the indicated file, in this case index.html
app.get('/test', (req,res) =>{
    res.sendFile(__dirname+'/index.html');
})

// after submission on index form, return "Hello " with our submitted names
app.get('/name', (req,res) => {
    res.send("Hello "+req.query.fname + " " + req.query.lname);
})

// returns a secure output using post and body parser of our sent book data from create.js
app.post('/api/books', (req,res) =>{
    console.log(req.body);
    bookModel.create({
        title:req.body.title,
        cover:req.body.cover,
        author:req.body.author
    })
    .then(()=>{res.send("Book Created")})
    .catch(()=>{res.send("Book Not Created")})
});

// returns the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

// Listens in on the selected port (4000 for us)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})