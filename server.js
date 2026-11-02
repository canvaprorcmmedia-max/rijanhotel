const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "public");

app.use(express.json());
app.use(express.static(publicDir));
app.use("/admin", express.static(path.join(__dirname, "admin")));

app.get("/health", (_req, res) => {
  res.json({ status: "ok", project: "Hotel Rijan Website" });
});

app.get("/", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.get("/admin", (_req, res) => {
  res.sendFile(path.join(__dirname, "admin", "login.html"));
});

app.listen(PORT, () => {
  console.log(`Hotel Rijan berjalan di http://localhost:${PORT}`);
});
