import express from "express";
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/characters", async (req, res) => {
  try {
    const { apikey, ts, hash } = req.query;
    const url = `http://gateway.marvel.com/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
