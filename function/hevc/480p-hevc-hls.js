exports.videoedit = function (req,res) {
const fs = require('fs');
//response = {
//      video_name:req.query.video,
//      folder_name:req.query.folder,
	  
//   console.log(response);	
//let data = JSON.stringify(response);
//fs.writeFileSync('student-2.json', data);	
let v = req.query.video
let f = req.query.folder
console.log("It working")
const makeDir = require('make-dir');
 (async () => {
    const path = await makeDir(f);
 
    console.log(path);
    //=> '/Users/sindresorhus/fun/unicorn/rainbow/cake'
})();

var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();
var file = v;
var folder = f;
var t = ("v:0,a:0 v:1,a:1");
var c = ("libx265");
ffmpeg(file)
.addOption('-f','hls') 
.outputOptions('-master_pl_name','master.m3u8')
.addOption('-map','0:v:0')
.addOption('-map','0:a:0')
.addOption('-map','0:v:0')
.addOption('-map','0:a:0')
.addOption('-filter:v:0','scale=w=640:h=-2')
.addOption('-pix_fmt','yuv420p')
.addOption('-c:v',c)
.addOption('-maxrate:v:0','300k')
.addOption('-bufsize:v:0','1200k')
.addOption('-b:a:0','96k')
.addOption('-filter:v:1','scale=w=842:h=-2 ')
.addOption('-pix_fmt','yuv420p')
.addOption('-c:v',c)
.addOption('-maxrate:v:1','600k')
.addOption('-bufsize:v:1','2100k')
.addOption('-b:a:1','96k')
.addOption('-var_stream_map',t)
.addOption('-hls_playlist_type','event')
.addOption('-hls_time', 10)
.addOption('-hls_segment_filename',folder+'/segment_%v_%03d.ts')

.on('error', function(err) {
console.log('An error occurred: ' + err.message);
res.send("error occurs : No such File in directory")
})
.on('end', function() {
console.log('Processing finished !');
//res.send("complete")
})
.save(folder+'/pl_%v.m3u8');
 res.send("video in processing.")
};