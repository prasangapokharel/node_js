
// server.js

const express = require('express');

const app = express();
// const prasangaLogin = require('./prasanga.js');
// const uiPage = require('./ui.js');


const db = require('./model/index');
db.sequelize.sync({ force: false });

app.use(express.json());
app.use(express.urlencoded({ extende: true }));
const createRouter = require("./routes/blogs.js");
const authRouter = require("./routes/auth.js");

app.use("/api", createRouter);
app.use("/auth", authRouter);




const port = 3000;

// Use the login route from prasanga.js
// app.use('/', prasangaLogin);

// // Use the UI route from ui.js
// app.use('/', uiPage);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

