const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors({ origin: 'https://localhost:4200' }));

app.use(express.static('images'));

const storage = multer.diskStorage({
  destination: 'images',
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).json({ message: 'File uploaded successfully' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Image server is running on port ${PORT}`);
});
