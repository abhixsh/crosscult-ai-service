const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { fromFile, upload } = require('./SpeechSynthesis');  // Import the middleware function

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the function for your /api/translate endpoint with POST method
app.post('/api/translate', upload.single("audioFile"), fromFile);

const port = process.env.PORT || 3004;
app.listen(port, () => console.log(`Server is running on port ${port}`));


