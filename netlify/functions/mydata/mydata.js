const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors'); // Import CORS middleware
const serverless = require('serverless-http');
// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Serve static files from the 'data' directory
app.use(express.static(path.join(__dirname, 'data')));

// Endpoint to fetch data from db.json
app.get("/data", (req, res) => {
  const filePath = path.resolve(__dirname, '..', '..', '..', 'data', 'db.json');

  // Read file asynchronously
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(404).json({ message: "File not found" });
    } else {
      res.json(JSON.parse(data.toString()));
    }
  });
});



module.exports.handler = serverless(app);