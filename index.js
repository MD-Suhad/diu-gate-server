const express = require('express');
const app = express()
const port  = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');



   //   ----database information---

   // dbUserName: diuCard
   // dbPass: yLqUuNH9mHbLJWsg

   const uri =
   "mongodb+srv://diuCard:yLqUuNH9mHbLJWsg@cluster0.5ii5ihy.mongodb.net/?retryWrites=true&w=majority";

   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
   res.send("database connected");
 });
 
 app.listen(port, () => {
   console.log(`example app listening on port ${port}`);
 });