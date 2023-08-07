import bodyParser from 'body-parser';
import express from 'express';


const app = express();

let users = [
  {
    id: 1,
    name: 'ali',
    age: 24,
    email: 'test@test.com',
    cnic: '349834-34378473874-3434',
  },
  {
    id: 2,
    name: 'bilal',
    age: 24,
    email: 'test@test.com',
    cnic: '349834-34378473874-3434',
  },
  {
    id: 3,
    name: 'yasal',
    age: 24,
    email: 'test@test.com',
    cnic: '349834-34378473874-3434',
  },
  {
    id: 4,
    name: 'shariq',
    age: 24,
    email: 'test@test.com',
    cnic: '349834-34378473874-3434',
  },
];

app.use(bodyParser.json());

// Routes
app.get('/users', (req, res) => {
  res.json(users);
  res.end();
});

app.put('/users/:id', (req,res)=>{
    let userId = parseInt(req.params.id);
    let userFoundIndex = users.findIndex((user)=>{
        return user.id === userId;
    })

    if(userFoundIndex !== -1){
        let newUserInformation = req.body;
        console.log(newUserInformation);
        users[userFoundIndex].email = newUserInformation.email;
        users[userFoundIndex].cnic = newUserInformation.cnic;

        res.json( users[userFoundIndex]);
    }
    else {
        res.json({message:"User not found"});
    }

    res.end();
});


// This is where our sever will start running
const PORT = 8080;

app.listen(PORT, () => {
  console.log('Server started listening on PORT: ', PORT);
});
