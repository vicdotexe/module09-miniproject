const fs = require('fs');
const inquirer = require('inquirer');

function prompt(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your full name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your location?",
            name: "location"
        },
        {
            type: "input",
            message: "Enter Bio information:",
            name: "bio"
        },
        {
            type: "input",
            message: "What is your github username",
            name: "github"
        },
        {
            type: "input",
            message: "What is your linked-in url?",
            name: "linkedIn"
        }
    ]).then((data)=>{
        let html = generateHtml(data);
        fs.writeFile("index.html", html, (error)=>{if(error)throw(error)})
    })
}

function generateHtml(data){
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>${data.name}'s Portfolio</title>
</head>
<body>
    <header>
        <div class="jumbotron">
            <h1 class="display-4">${data.name}'s Portfolio</h1>
            <p class="lead">Welcome to ${data.name}'s portolio page.</p>
            <hr class="my-4">
            <h3>Bio:</h3>
            <p>${data.bio}</p>
            <p>I am located in ${data.location}</p>
            <h3>Contact Info:</h3>
            <ul>
                <li>Github: <a href="https://www.github.com/${data.github}">${data.github}</a></li>
                <li>Linked In: <a href="${data.linkedIn}">${data.name}</a></li>
            </ul>
            </div>
    </header>

</body>
</html>`;
}

prompt();