const fs1 = require('fs-extra');
const fs = require('fs')
import path from 'path'
 function mycp(){
   if(path.extname(process.argv[2])==='.txt' && path.extname(process.argv[3])==='.txt'){
   console.log(fs.copyFileSync(process.argv[2], process.argv[3]));
   console.log("copy successful");
   }    if((fs.statSync(process.argv[2]).isDirectory()) &&(fs.statSync(process.argv[3]).isDirectory())){ 
     console.log(fs1.copySync(process.argv[2], process.argv[3]));
     console.log("copy dir is successful");
   }   
 }  
 mycp();

 