let day = new Date().getDay();
let hours = new Date().getHours();
console.log(hours);

function verif1(req, res, next) {
  if (day > 0 && day < 6 && hours > 8 && hours < 17) {
    next();
  } else {
    res.send(`<h1>service closed now... <h1/>`);
  }
}
module.exports = verif1;
