const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Define routes for contacts
const contactSchema = new mongoose.Schema({
  Name: String,
  MobileNumber: Number,
  EmailAddress: String,
});

const ContactModel = mongoose.model('Contact', contactSchema, 'contacts');

app.get('/api/contacts', async (req, res) => {
  try {
    const data = await ContactModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to add a new contact
app.post('/api/contacts', async (req, res) => {
  try {
    const newContact = new ContactModel(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Contact added successfully' });
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Handle 404 - Route not found
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


const orderSchema = new mongoose.Schema({
  order: String,
  orderdetails: String,
  payment: String
});

const OrderModel = mongoose.model('Order', orderSchema, 'orders');

app.get('/api/orders', async (req, res) => {
  try {
    const data = await OrderModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const bookSchema = new mongoose.Schema({
  name: String,
  phonenumber: Number,
  email: String,
  persons:Number,
  date:String
  // Add other fields as needed
});

const BookModel = mongoose.model('Book', bookSchema, 'books');

app.get('/api/books', async (req, res) => {
  try {
    const data = await BookModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const loginSchema = new mongoose.Schema({
  email: String,
  password: String
});

const LoginModel = mongoose.model('login', loginSchema, 'login');

app.get('/api/login', async (req, res) => {
  try {
    const data = await LoginModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log("server is started successfully");
});
