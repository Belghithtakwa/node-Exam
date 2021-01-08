import path from 'path'
import fs from 'fs'
import {readFileSync} from 'fs'
function mycat(){
  
if(path.extname(process.argv[2])){
  console.log(readFileSync(path.resolve(process.argv[2]), 'utf-8'));}
else if((process.argv[2]=== '-e')&& process.argv[3]){
 let data=readFileSync(path.resolve(process.argv[3]), 'utf-8');
 console.log(data+'$');
}

else {
  { console.log("Hello WORLD")}
}
}
mycat();


