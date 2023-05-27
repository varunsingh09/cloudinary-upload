const express = require("express");
require("dotenv").config();
const app = express();
const uploadRouter = require('./routes/upload.routes')
const port = process.env.PORT || 3333;

app.use(express.json());
app.use('/upload', uploadRouter)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});