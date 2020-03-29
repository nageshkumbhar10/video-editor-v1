exports.videoedit = function (req,res) {
let v = req.query.video
let f = req.query.folder
const makeDir = require('make-dir');
 (async () => {
    const path = await makeDir(f);
 
    console.log('folder created'+path);
    //=> '/Users/sindresorhus/fun/unicorn/rainbow/cake'
})();

var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();
var file = v;
var folder = f;
var t = ("v:0,a:0 v:1,a:1 v:2,a:2");
var c = ("libx265");
ffmpeg(file)
.addOption('-f','hls') 
.outputOptions('-master_pl_name','master.m3u8')
.addOption('-map','0:v:0')
.addOption('-map','0:a:0')
.addOption('-map','0:v:0')
.addOption('-map','0:a:0')
.addOption('-map','0:v:0')
.addOption('-map','0:a:0')
.addOption('-filter:v:0','scale=w=640:h=-2')
.addOption('-pix_fmt','yuv420p')
.addOption('-c:v',c)
.addOption('-maxrate:v:0','300k')
.addOption('-bufsize:v:0','800k')
.addOption('-b:a:0','32k')
.addOption('-filter:v:1','scale=w=842:h=-2 ')
.addOption('-pix_fmt','yuv420p')
.addOption('-c:v',c)
.addOption('-maxrate:v:1','600k')
.addOption('-bufsize:v:1','1000k')
.addOption('-b:a:1','96k')
.addOption('-filter:v:1','scale=w=1280:h=-2 ')
.addOption('-pix_fmt','yuv420p')
.addOption('-c:v',c)
.addOption('-maxrate:v:2','800k')
.addOption('-bufsize:v:2','2100k')
.addOption('-b:a:2','128k')
.addOption('-var_stream_map',t)
.addOption('-hls_playlist_type','event')
.addOption('-hls_time', 10)
.addOption('-hls_segment_filename',folder+'/segment_%v_%03d.ts')

.on('error', function(err) {
console.log('An error occurred: ' + err.message);
res.send("error occurs while 720p convert.");
})
.on('end', function() {
console.log('Processing finished !');
//res.send("complete 720p");
})
.save(folder+'/pl_%v.m3u8');
 res.send("video in processing.")
};
