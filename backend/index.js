const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const UserData = [
  {Username: "John", Password: "Zoro"},
  {Username: "Ben", Password: "Zoro"},
  {Username: "Zara", Password: "1234"}
];

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Zoro backend')
})

app.post('/login', (req, res) => {
  const username= req.body.username;
  const password= req.body.password;
  //Finding the user if exist by making both to be lowercase
  let user = UserData.filter(u=> u.Username.toLowerCase() === username.toLowerCase())[0];

  if(user){
     if(user.Password === password){
        res.send('Welcome to Zoro');
     }else{
      res.status(401).send('Authentication failed!, Username/Password invaild');
     }
  }else{
    res.status(404).send('User does not exist!');
  }
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})