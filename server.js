
// server.js

const express = require('express');
const prasangaLogin = require('./prasanga.js');
const uiPage = require('./ui.js');
const db = require('./model/index.js')
const db = require('./model/blog.js')


const app = express();
const port = 3000;

// Use the login route from prasanga.js
app.use('/', prasangaLogin);

// Use the UI route from ui.js
app.use('/', uiPage);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

