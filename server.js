const express = require("express");
const path = require("path");
const logger = require("morgan");
require("dotenv").config();
require("./config/database");

const userRouter = require("./routes/usersRouter");
const artworkRouter = require("./routes/artworksRouter");
const exhibitionRouter = require("./routes/exhibitionsRouter");
const locationRouter = require("./routes/locationsRouter");

const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

app.get("/api", (req, res) => {
  res.json({ msg: "Hi" });
});

const isLoggedIn = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode) {
      res.locals.user = decode.user;
      next();
    } else {
      res.status(403).json({ message: "sorry" });
    }
  } catch (error) {
    res.status(403).json({ error });
  }
};

app.get("/api/secret", isLoggedIn, (req, res) => {
  const { user } = res.locals;
  res.json({ user });
});

app.use("/api/users", userRouter);


app.use("/api/exhibitions", exhibitionRouter);
app.use("/api/artworks", artworkRouter);
app.use("/api/locations", locationRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
