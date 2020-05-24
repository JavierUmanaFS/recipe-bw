const bcryptjs = require("bcryptjs");

const router = require("express").Router();
const Auth = require("./authModel.js");

const { 
  validCredentials,
  // compareValues,
  createToken,
  validateRegistration
} = require("../middleware/authMiddleware.js");

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcryptjs.hashSync(user.password, 5);
  user.password = hash;
  const token = createToken(user);
  Auth.add(user)
  .then(saved => {
    res.status(201).json({ message: "User created successfully", user: saved, token});
  })
  .catch(error => {
    res.status(500).json({ errorMessage: error.message })
  })
})

// router.post('/register', (req, res) => {
//   const credentials = req.body;

//   if(validCredentials(credentials) ){
//      secureCredentials(credentials)
//   Users.add(credentials)
//   .then(user => {
//     console.log(user, "LOOKING FOR u")
//     if(user) {
//     res.status(201).json({ message: `Account created for user ${user.username}, please log in to continue`});
//     } else {
// res.status(404).json({ message: "Not sure whats going on"})
//     }
    
//   })
//   .catch(error => {
//     res.status(500).json({ errorMessage: error.message})
//   });
// } else {
//   res.status(400).json({ message: "Please provide username and password."})
// }
// });

// router.post("/register", validateRegistration, (req, res) => {
//   console.log(req.user)
//   Users.add(req.user)
//   .then(response => {
//     console.log(response)
//     res.status(201).json({ message: "Success!", res: response});
//   })
//   .catch(error => {
//     res.status(404).json({ errorMessage: error.message, errormsg: " THIS IS WHAT IM GETTING ?" })
//   }) 
// });

// const credentials = req.body;

//   if(validCredentials(credentials)){
//      secureCredentials(credentials)
//    Users.add(credentials)
//    .then(() => {
//     res.status(201).json({ message: "Success!" })  
//   })
//   .catch(error => {
//     res.status(500).json({ errorMessage: error.message})
//   });
//   } else {
//     res.status(400).json({ message: "Invalid credentials"})
//   }
// router.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   if(validCredentials(req.body)){
//     Auth.findBy({ username })
//     .then(([user]) =>{
//       if(user && bcryptjs.compareSync(password, user.password)){
//         const token = createToken(user);
//         res.status(200)
//         .json({ message: `Welcome ${user.username}`, 
//                 token, user_id: user.id })
//       } else {
//         res.status(401).json({ message: "Invalid credentials"})
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ errorMessage: error.message})
//     })
//   } else {
//     res.status(400).json({ message: "Please provide valid user credentials"})
//   }
// });


module.exports = router;