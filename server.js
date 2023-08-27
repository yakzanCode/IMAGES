const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'https://your-main-application-domain.com' }));

app.use(express.static('images'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Image server is running on port ${PORT}`);
});
