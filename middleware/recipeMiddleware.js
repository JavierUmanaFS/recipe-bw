
const db = require("../data/dbConfig.js");

module.exports = {
  formatCategory,

};

async function formatCategory(req, res, next){
  try {
    if(req.body.category === "italian") {
    req.body.category === 1
    next();
  } else if (req.body.category === "american") {
    req.body.category === 2
    next();
  } else if(req.body.category === "vegan"){
    req.body.category === 3
    next();
  } else {
    await db("categories").insert(req.body.category)
    next();
  }
  } catch (error) {
    throw error;
  }
  
}
