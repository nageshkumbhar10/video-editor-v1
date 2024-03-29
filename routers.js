var video = require("./function/480p-hls");
var video2 = require("./function/720p-hls");
var video3 = require("./function/1080p-hls");
var video5= require("./function/hevc/480p-hevc-hls");
var video6 = require("./function/hevc/720p-hevc-hls");
var video7 = require("./function/hevc/1080p-hevc-hls");
var video4 = require("./function/mp4-video");
var open = require("./function/start");

module.exports = function(app) { 
  console.log("video edit function")
  app.route('/')
     .get(open.start);
  app.route('/480p')
     .get(video.videoedit);
  app.route('/720p')
     .get(video2.videoedit);
  app.route('/1080p')
     .get(video3.videoedit);  
  app.route('/mp4')
     .get(video4.videoedit); 
  app.route('/hevc/480p')
     .get(video5.videoedit); 
  app.route('/hevc/720p')
     .get(video6.videoedit); 
  app.route('/hevc/1080p')
     .get(video7.videoedit); 
	
}; 


