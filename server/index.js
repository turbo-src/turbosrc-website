const express = require("express");

const port = process.env.PORT || 3001;

const app = require("./app");

app.listen(port, () => {
  console.log(`turbo-src website listening on port ${port}`);
});
