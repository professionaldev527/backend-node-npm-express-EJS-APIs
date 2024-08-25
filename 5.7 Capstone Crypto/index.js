import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
const API_URL = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json";
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", { 
        price: result.data.bpi.USD.rate,});   
    } catch (error) {
      res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
  