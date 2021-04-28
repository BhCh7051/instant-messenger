const { Socket } = require("dgram");
const mongo = require('mongodb');
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());


const http = require("http").createServer(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });

const port = process.env.PORT || 5000;

const dbclient = mongo.MongoClient;
const url = "mongodb://localhost:27017/chat";

let dbo = null;

dbclient.connect(url).then((db)=>{
    dbo = db.db('chat');
    console.log("database connected");

    http.listen(port, () => {
        console.log(`listening on : ${port}`);
    })
});


app.get("/login", (req, res)=>{
    console.log("got get");
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }, null, 3));
})

app.post("/login", (req, res) => {
    const {username, password} = req.body;
    console.log(req.body);
    let val = true;

    if(username != "rohit")
        val = false;
    
    dbo.collection("users").findOne(req.body)
    .then(result => {
        if(result != null) val=true;

        console.log(result, val);

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ user: val }, null, 3));
    })
    .catch(err => console.log(err));

})

app.post("/register", (req, res) => {
    const {username, password} = req.body;
    console.log(req.body);
    let val = false;

    if(username != "rohit")
        val = false;
    
    dbo.collection("users").findOne(req.body)
    .then(result => {
        if(result != null){
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ user: val }, null, 3));
        }else{
        
            val=true;

            dbo.collection('users').insertOne(req.body)
            .then(data => console.log(data))
            .catch(err => console.log(err));

            console.log(result, val);

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ user: val }, null, 3));
        }
    })
    .catch(err => console.log(err));

})






















io.on("connection", (socket) => {
  /* socket object may be used to send specific messages to the new connected client */
  console.log("new client connected");

  let count = 0;

  let interval = setInterval(() => {
    count++;
    console.log(`sending message: ${count}`);
    socket.emit("message", `Message ${count}`);
  }, 1000);

  socket.on("message", (msg) => {
    console.log(`message received from client: ${msg}`);
  });

  socket.on("disconnect", (msg) => {
    clearInterval(interval);

    console.log("Socket disconnected - ", msg);
  });
});


