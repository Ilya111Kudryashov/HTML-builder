const fs=require('fs');
const path=require('path');
const promises=fs.promises;
const copyFile=promises.copyFile;

(function copyDir(){
    fs.mkdir(path.join(__dirname,'files-copy'),{
        recursive:true,
    }, err=>{
        if(err){
            throw new Error('folder already exsists or it maybe anither problem');
        }
        console.log('folder created');
    });

    
    promises
        .readdir(path.join(__dirname,'files'))
        .then(files=>{
            files.forEach(file => {
                const filePath=path.join(__dirname,'files',file);
                copyFile(filePath,path.join(__dirname,'files-copy',file));
                console.log(file);
            });
        });
})();
