function htmlHelper (teamMembers) {
    let htmlTeamMembers = [];
    for (let i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].getRole() === 'Manager') {
            let managerTemplate = `<div class="col-sm-6">
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">${teamMembers[i].getName()}</h5>
                    <p class="card-text">${teamMembers[i].getRole()}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${teamMembers[i].getId()}</li>
                        <li class="list-group-item">${teamMembers[i].getEmail()}</li>
                        <li class="list-group-item">${teamMembers[i].getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>`
            htmlTeamMembers.push(managerTemplate);
        } else if (teamMembers[i].getRole() === 'Engineer') {
            let engineerTemplate = `<div class="col-sm-6">
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">${teamMembers[i].getName()}</h5>
                    <p class="card-text">${teamMembers[i].getRole()}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${teamMembers[i].getId()}</li>
                        <li class="list-group-item">${teamMembers[i].getEmail()}</li>
                        <li class="list-group-item">${teamMembers[i].getGithub()}</li>
                    </ul>
                </div>
            </div>
        </div>`
            htmlTeamMembers.push(engineerTemplate);
        } else {
            let internTemplate = `<div class="col-sm-6">
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">${teamMembers[i].getName()}</h5>
                    <p class="card-text">${teamMembers[i].getRole()}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${teamMembers[i].getId()}</li>
                        <li class="list-group-item">${teamMembers[i].getEmail()}</li>
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
    <title>Document</title>
</head>

<body>
    <div class="row">
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