const fs=require('fs');
const path = require('path');
const { stdin, stdout, exit}=require('process');
const pathAbsolute=path.join(__dirname,'text.txt');
const output=fs.createWriteStream(pathAbsolute);
stdout.write('hello! enter the text: \n');
stdin.on('data',data=>{
    if(data.toString().trim()==='exit'){
        sayGoodBye();
    }
    output.write(data);
});

process.on('SIGINT',sayGoodBye);

function sayGoodBye(){
    stdout.write('\nGLHF');
    exit();
}