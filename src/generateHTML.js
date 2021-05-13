const generateHTML = (teamName, entireTeam) => {
  console.log(teamName, entireTeam);
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sample HTML</title>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header class="text-center p-4 bg-info">
      <h1>Team Name</h1>
    </header>

    <div class="d-flex flex-wrap">
      <div class="card m-4" style="width: 18rem">
        <div class="card-header">
          <h5 class="card-title">Bob</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            <i class="fas fa-mug-hot"></i> Manager
          </h6>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: 1</li>
            <li class="list-group-item">Email: bob@restaurant.com</li>
            <li class="list-group-item">Office Number: 555 6666</li>
          </ul>
        </div>
      </div>
  
      <div class="card m-4" style="width: 18rem">
        <div class="card-header">
          <h5 class="card-title">Linda</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            <i class="fas fa-glasses"></i></i> Engineer
          </h6>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: 2</li>
            <li class="list-group-item">Email: linda@restaurant.com</li>
            <li class="list-group-item">GitHub: lindabelcher</li>
          </ul>
        </div>
      </div>
  
      <div class="card m-4" style="width: 18rem">
        <div class="card-header">
          <h5 class="card-title">Tina</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            <i class="fas fa-user-graduate"></i></i> Intern
          </h6>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: 3</li>
            <li class="list-group-item">Email: tina@restaurant.com</li>
            <li class="list-group-item">School: wagstaff</li>
          </ul>
        </div>
      </div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
};

module.exports = generateHTML;
