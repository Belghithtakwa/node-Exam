import fs from 'fs'
import path from 'path'

function myls(){
  console.log(process.argv)
  if(process.argv[2]){
  console.log(fs.readdirSync(path.dirname(process.argv[2])))
} else if(process.argv[2]==='-a'){
  let workspace = process.cwd();
  console.log(fs.readdirSync(path.dirname(workspace)))

} else if(process.argv[2]=== '_R'){
  const getAllFiles = function(path.dirname(process.argv[1]), arrayOfFiles) {
  let  files = fs.readdirSync(path.dirname(process.argv[1]))
  
    arrayOfFiles = arrayOfFiles || []
  
    files.forEach(function(file) {
      if (fs.statSync(path.dirname(process.argv[1])+ "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(path.dirname(process.argv[1]) + "/" + file, arrayOfFiles)
      } else {
        arrayOfFiles.push(path.join(__dirname,path.dirname(process.argv[1]), "/", file))
      }
    })
  
    return arrayOfFiles
  }
}
else {
  console.log(fs.readdirSync(path.dirname(__dirname)))
}}

myls();
