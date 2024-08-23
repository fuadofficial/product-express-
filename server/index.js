const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data.json')

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json(data);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
