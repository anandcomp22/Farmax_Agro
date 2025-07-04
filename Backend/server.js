const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/crops', require('./routes/cropRoutes'));
app.use('/api/weather', require('./routes/weatherRoutes'));
app.use('/api/market', require('./routes/marketRoutes'));
app.use('/api/market', require('./routes/enamRoutes'));

app.get('/', (req, res) => {
  res.send('Farmax Agro Backend API is running...');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
