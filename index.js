const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
const userRoutes = require('./routes/user');
const employeeRoutes = require('./routes/employee');

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 7529;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
