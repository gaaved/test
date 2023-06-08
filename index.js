const express = require('express')
const app = express()
const port = 3000
const Rout = require("./routes/index.js");

const errorHandler = require("./middleware/error-Handler");
const error404 = require("./middleware/404");

// format
app.use(
    express.json({
        limit: '50mb',
    })
);

app.use(express.urlencoded({extended: true}))


app.use('/', Rout);
app.use(express.static('public'))



app.use(error404);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port 3000`)
})

module.exports = app;

