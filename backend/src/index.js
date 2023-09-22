
const express = require('express');
const cors  = require('cors');
const mongoose = require('mongoose');
const route = require('../src/route/route')

const port = process.env.PORT || 3000

const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect('mongodb+srv://nehajaiswal:neha123@nehadb.pcorgpc.mongodb.net/todoapp',{
    useNewUrlParser: true
}).then(()=>{
    console.log("MongoDB is connected");
}).catch((error)=>{
    console.log(error.message);
});

app.use('/', route);

app.post('/test-me', function(){
    console.log("Server is running OK!")
})

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});
