import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true}));

const date = new Date();
const dayOfWeek = date.getDay();

console.log(dayOfWeek);

function whichDay(req, res) {
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        var day = "weekend"; 
    } else {
        var day = "weekday";
    }
    return day;
}

app.get("/", (req, res) => {
    const day = whichDay(); 
  res.render(__dirname + "/views/index.ejs", { day });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });