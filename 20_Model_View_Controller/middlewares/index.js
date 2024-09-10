const fs = require("fs");

function logResqRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `\n${Date.now()} : ${req.ip} : ${req.mrthod} : ${req.path}\n`,
      (err, data) => {
        next();
      }
    );
  };
}

module.exports = {
  logResqRes,
};