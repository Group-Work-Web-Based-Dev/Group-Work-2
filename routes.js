var express = require('express') //require express module
var router = express.Router() //define router

// middleware that is specific to this router
router.use(function(req, res, next) {
  next()
})
let lessons = [
  {
    "id": 1,
    "Subject": "Math",
    "Location": "London",
    "price": 150,
  },
  {
    "id": 2,
    "Subject": "Engilsh",
    "Location": "London",
    "price": 100,
  },
  {
    "id": 3,
    "Subject": "Science",
    "Location": "Oxford",
    "price": 90,
  },
  {
    "id": 4,
    "Subject": "Histoy",
    "Location": "York",
    "price": 80,
  },
  {
    "id": 5,
    "Subject": "Music",
    "Location": "Brisol",
    "price": 70,
  }
]

let user = [
  {
    'email': 'user@email.com',
    'password': 'mypassword'
  }
]

router.get('/lesson', (request, response) => {
  response.json(lessons);
});

router.get('/user', (request, response) => {
  response.json(user);
});

module.exports = router