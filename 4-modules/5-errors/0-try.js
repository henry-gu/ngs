const fs = require("fs");

const files = ["./1-loop.js", "./zzz.js", "./2-try.js"];

files.forEach((file) => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    console.log(`File data:
        ${data}`);
  } catch (err) {
    if (err.code == "ENOENT") {
      console.log(`${err}`);
    } else {
      throw err;
    }
  }
});
