const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

(async () => {
  try {
    const app = express();
    const port = process.env.PORT || 5000;

    app.disable("x-powered-by");
    app.use(express.json());
    app.use(cors({ credentials: true }));
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // // Serve static assets if in production
    // if (process.env.NODE_ENV === "production") {
    //   // Set static folder
    //   app.use(express.static("frontend/build"));
    // }

    // app.get("*", (req, res) => {
    //   res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
    // });

    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
})();
