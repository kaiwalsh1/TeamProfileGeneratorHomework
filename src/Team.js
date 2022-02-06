function htmlHelper(teamMembers) {
    let htmlTeamMembers = [];
    for (let i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].getRole() === 'Manager') {
            let managerTemplate = `<div class="col-sm-3 mt-3 mx-1">
            <div class="card">
                <div class="card-body bg-primary">
                    <h3 class="card-title text-center">${teamMembers[i].getName()}</h3>
                    <h5 class="card-text text-center">
                    <i class="fas fa-mug-hot"></i>
                    ${teamMembers[i].getRole()}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMembers[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${teamMembers[i].getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>`
            htmlTeamMembers.push(managerTemplate);
        } else if (teamMembers[i].getRole() === 'Engineer') {
            let engineerTemplate = `<div class="col-sm-3 mt-3 mx-1">
            <div class="card">
                <div class="card-body bg-primary">
                    <h3 class="card-title text-center">${teamMembers[i].getName()}</h3>                    
                    <h5 class="card-text text-center">
                    <i class="fas fa-glasses"></i>
                    ${teamMembers[i].getRole()}</h5>
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMembers[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="http://github.com/${teamMembers[i].getGithub()}" target="_blank">${teamMembers[i].getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>`
            htmlTeamMembers.push(engineerTemplate);
        } else {
            let internTemplate = `<div class="col-sm-3 mt-3 mx-1">
            <div class="card">
                <div class="card-body bg-primary">
                    <h3 class="card-title text-center">${teamMembers[i].getName()}</h3>                    
                    <h5 class="card-text text-center">
                        <i class="fas fa-user-graduate"></i>
                        ${teamMembers[i].getRole()}
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${teamMembers[i].getId()}</li>
                        <li class="list-group-item">Email: ${teamMembers[i].getEmail()}</li>
                        <li class="list-group-item">${teamMembers[i].getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>`
            htmlTeamMembers.push(internTemplate);
        }
    }
    // console.log('this is my html array', htmlTeamMembers);
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
    <title>Team Profile Generator</title>
</head>

<body>
<div class="navbar">
<div class="jumbotron col-12 py-5" style="background-color: rgb(240, 97, 97);">
    <h1 class="text-center">My Team</h1>
</div>
</div>

    <div class="row mt-5 justify-content-center">
    ${htmlTeamMembers.join("")}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
</body>

</html>
`
};

module.exports = htmlHelper;