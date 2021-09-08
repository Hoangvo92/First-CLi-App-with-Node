const fcawn = require('commander');

const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

const files = require('./lib/files');
const github = require('./lib/github_credentials');

fcawn
    .command('init')
    .description('Draw app banner')
    .action(()=> {
        clear();
        console.log(chalk.magenta(figlet.textSync('First CLI App', { horizontalLayout: 'full'})));
});

facwn
    .command('octocheck')
    .description('Check user GitHub credentials')
    .action(async() => {
       let token = github.getStoredGitHubToken();
       if (!token) {
           await github.setGitHubCredentials();
           token = await github.registerNewToken();
       }
       console.log(token);
});


facwn
    .command('create_repo')
    .description('Create a new repository on Github')
    .action(async() => {
       const getGitHubToken = async() => {
          let token= github.getStoredGitHubToken();
           if (token) {
               return token;
           }
           await getGitHubCredentials();
           
           token = await github.registerNewToken();
           return token;
       }
       try {
            const token = await GetGitHubToken();
           github.gitHubAuth(token);
           
           const url = await repo.createRemoteRepository();
           
           await repo.createGitIgnore();
           
           const complete = await repo.setupRepository(url);
           
           if (complete) {
           console.log(chalk.green("All done!"));
           }
       } catch (error) {
           if (error) {
           
              switch (error.status) {
                  case 401:
                      console.log(chalk.red('Couldn\'t log you in. Please provide correct token!'));
                      break;
                  case 422:
                      console.log(chalk.red('THere already exists a remote repository.'));
                      break;
                  default:
                      console.log(error);
                      break;
              }
           }
       }
           
       
});

fcawn.parse(process.argv);
if(!fcawn.args.length){
    fcawn.help();
}