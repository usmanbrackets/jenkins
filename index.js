const app = require("express")();

app.get("/", (req, res, next) => {
  console.log("server is running on ");

  return res.status(200).json({
    message: "server is health",
  });
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
