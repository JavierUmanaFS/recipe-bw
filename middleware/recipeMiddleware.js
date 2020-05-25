
const db = require("../data/dbConfig.js");

module.exports = {
  formatCategory,

};

 function formatCategory(req, res, next){
   if(req.body.category){
  if(req.body.category == "italian") {
    return req.body.category === 1
  } else if (req.body.category == "american") {
    return req.body.category === 2
  } else if(req.body.category == "vegan"){
   return req.body.category === 3
  } else {
    db("categories").insert(req.body.category, "category")
    next();
  }
   }else {
     res.status(400).json({ message: "WHAT ARE U DOINH"})
     next();
   }
}