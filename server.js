// var http = require('http');
// var f2= require('./f4-hls3-folder');
// var f3= require('./f4-hls4-folder');
var url = require('url');
const express = require('express')
const fs = require('fs');
const port = 8081
var setRoutes = require('./routers')


const app = express();
// sapp.get('/', (req, res) => res.send("this nagesh hls video editior"))
// app.get('/video',(req,res) => {
//   console.log(req.query.name);
//   if(req.query.name == null){
//     res.send("Please enter query parameter")
//   }
//   else{
//     res.send("Hi "+req.query.name)
//   }
// })
// app.get('/video480p',(req,res) => {
//   console.log(req.query.video+" "+req.query.folder);
//   if(req.query.video == null && req.query.folder == null){
//     res.send("Please enter query parameter")
//   }
//   else{
//     let v = req.query.video
//     let f = req.query.folder
//     f2.videoedit(v,f)
//     res.send("Hi video converting started.")
//   }
// })

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.listen(port, () =>{

 console.log(`Example app listening on port ${port}!`);


 });
app.use(express.static('public'));
app.get('/480p.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "480p.html" );
})
app.get('/720p.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "720p.html" );
})
app.get('/1080p.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "1080p.html" );
})
app.get('/hevc480p.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "hevc480p.html" );
})
app.get('/hevc720p.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "hevc720p.html" );
})
app.get('/hevc1080p.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "hevc1080p.html" );
})
app.get('/index.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "index.htm" );
})
 setRoutes(app);


// http.createServer(function (req, res) {
//   // res.writeHead(200, {'Content-Type': 'text/plain'});
//   // var q = url.parse(req.url, true).query;
//   // var k = q.video480p + " " + q.folder480p;
//   // var v = q.video480p;
// //   var f = q.folder480p;
// //  // var q1 = url.parse(req.url, true).query;
// // // var k1 = q1.video720p + " " + q1.folder720p;
// // // var v1 = q1.video720p;
// // // var f1 = q1.folder720p;
// //   console.log ("480p="+v);
// //   console.log ("480p folder ="+f);
// // console.log ("720p="+v1);
//  // console.log ("720p folder ="+f1);
// //  console.log (q);
   
//   // if(q==null) {
//   //             console.log ("no video file");
//   //           } else {
//   //             console.log ("video file") ;
//   //           }
//   //   // Send the response body 

// //  res.end('this is my video editor.');
  
// }).listen(8081);


 
 
