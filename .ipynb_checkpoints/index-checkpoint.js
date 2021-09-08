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

fcawn.parse(process.argv);
if(!fcawn.args.length){
    fcawn.help();
}