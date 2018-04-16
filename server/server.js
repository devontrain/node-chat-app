const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(3000, () => {
	console.log(`Server started on PORT: ${PORT}`);
});