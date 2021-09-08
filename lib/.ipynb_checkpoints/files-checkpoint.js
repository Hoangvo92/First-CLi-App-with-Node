const fs = require('fs');
const path = require('path');

module.exports = {
    
     getCurrentDirectoryBase : () =>{
         return  path.basename(process.cwd());
     },
    
    directoryExists : (filePath) => {
        try {
            return fs.statSync(filePath).isDirectory();
        } catch (err){
            return false;
        }
    },
    //check whether git repository exists
    
    isGitRepository: () => {
        if (file.directoryExists('.git')){
            console.log(chalk.red('Sorry! Can\'t create a new git repo because this directory is already inside a git repository'));
            process.exit();
        }
    
};



//basename: find current directory
//process is 
//cwd current working directory
//path.basename(path.dirname(fs.realpathSync(__filename)));