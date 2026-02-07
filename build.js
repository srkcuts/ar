const fs = require("fs");

const files = fs.readdirSync("./targets-src");

const names = files
  .filter(f => f.endsWith(".jpeg"))
  .map(f => f.replace(".jpg",""));

fs.writeFileSync("events.json", JSON.stringify(names,null,2));

console.log("events.json updated!");
