var http = require('http');
const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What's your name",
    },
    {
        type: 'input',
        name: '',
        message: "What's your location",
    },
    {
        type: 'input',
        name: 'bio',
        message: "Enter a quick bio",
    },
    {
        type: 'input',
        name: 'LinkedIn',
        message: "What is your LinkedIn URL?",
    },
    {
        type: 'input',
        name: 'GitHub',
        message: "What is your GitHub URL?",
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    //var responce = JSON.stringify(answers, null, '  ');
    //console.log("responce", responce);
    console.log("answers", answers);
    const filename = "tempfile.html"
    console.log("filename ", filename);
    var myHTMLTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NodeJS MiniProject</title>
    </head>
    <body>
    <div class="Employee">
    <h1>${answers.name}</h1>
    <p class="location">${answers.location}</p>
    <p class="bio">${answers.bio}</p>
    <p class="LinkedIn">${answers.LinkedIn}</p>
    <p class="GitHub">${answers.GitHub}</p>
    </div>
    </body>
    </html>
`;
console.log("myHTMLTemplate", myHTMLTemplate);
    fs.appendFile(filename, myHTMLTemplate, (err) => {
    if (err) {
        console.log(err);
    }
    });
  });