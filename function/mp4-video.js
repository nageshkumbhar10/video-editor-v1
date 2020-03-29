exports.videoedit = function (req,res) {
    let v = req.query.video
    let f = req.query.folder
	let d = req.query.output
	let p = req.query.profile
    console.log("It working")
    const makeDir = require('make-dir');
     (async () => {
      const path = await makeDir(f);
       // res.send("video path is created.")
        console.log(path);
        //=> '/Users/sindresorhus/fun/unicorn/rainbow/cake'
       })();
	
   
    var ffmpeg = require('fluent-ffmpeg');
    var command = ffmpeg();
    var file = v;
    var folder = f;
    //var t = ("v:0,a:0 v:1,a:1 v:2,a:2 v:3,a:3");
if (p == "720p"){   
   ffmpeg(file)
    //.addOption('-f','hls') 
    //.outputOptions('-master_pl_name','master.m3u8')
    .addOption('-c:v','libx264')
    .addOption('-vb','2000k')
	.addOption('-s','1280x720')
    .addOption('-preset','veryfast')
    .addOption('-c:a','aac')
    .addOption('-ab','128k')
    
    .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
    res.send("error occurs while coverting video.")
    })
    .on('end', function() {
    console.log('Processing finished !');
   // res.send("complete 720p video.")
    })
    .save(folder+'/'+ d);
};  
 if (p == "1080p"){   
   ffmpeg(file)
    //.addOption('-f','hls') 
    //.outputOptions('-master_pl_name','master.m3u8')
    .addOption('-c:v','libx264')
    .addOption('-vb','4000k')
	.addOption('-s','1920x1080')
    .addOption('-preset','veryfast')
    .addOption('-c:a','aac')
    .addOption('-ab','128k')
    
    .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
    res.send("error occurs while coverting video.")
    })
    .on('end', function() {
    console.log('Processing finished !');
   // res.send("complete 1080p video.")
    })
    .save(folder+'/'+ d);
};  
if (p == "480p"){   
   ffmpeg(file)
    //.addOption('-f','hls') 
    //.outputOptions('-master_pl_name','master.m3u8')
    .addOption('-c:v','libx264')
    .addOption('-vb','900k')
	.addOption('-s','854x480')
    .addOption('-preset','veryfast')
    .addOption('-c:a','aac')
    .addOption('-ab','96k')
    
    .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
    res.send("error occurs while coverting video.")
    })
    .on('end', function() {
    console.log('Processing finished !');
    res.send("complete 480p video.")
    })
    .save(folder+'/'+ d);
};  
if (p == "360p"){   
   ffmpeg(file)
    //.addOption('-f','hls') 
    //.outputOptions('-master_pl_name','master.m3u8')
    .addOption('-c:v','libx264')
    .addOption('-vb','500k')
	.addOption('-s','940x360')
    .addOption('-preset','veryfast')
    .addOption('-c:a','aac')
    .addOption('-ab','64k')
    
    .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
    res.send("error occurs while coverting video.")
    })
    .on('end', function() {
    console.log('Processing finished !');
   // res.send("complete 360p video.")
    })
    .save(folder+'/'+ d);
};  
res.send("video processing.")  
 };