const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("now listening");
});
