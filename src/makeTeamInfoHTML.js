const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const generateInternCard = (teamMember) => {
  const { name, id, email, role, school } = teamMember;
  return `
    <div class="card m-4" style="width: 18rem">
      <div class="card-header">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          <i class="fas fa-glasses"></i></i> ${role}
        </h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">GitHub: ${school}</li>
        </ul>
      </div>
    </div>`;
};

const generateEngineerCard = (teamMember) => {
  const { name, id, email, role, github } = teamMember;
  return `
    <div class="card m-4" style="width: 18rem">
      <div class="card-header">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          <i class="fas fa-glasses"></i></i> ${role}
        </h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">GitHub: ${github}</li>
        </ul>
      </div>
    </div>`;
};

const generateManagerCard = (teamMember) => {
  const { name, id, email, role, officeNumber } = teamMember;

  return `
    <div class="card m-4" style="width: 18rem">
      <div class="card-header">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
              <i class="fas fa-mug-hot"></i> ${role}
        </h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
           <li class="list-group-item">ID: ${id}</li>
           <li class="list-group-item">Email: ${email}</li>
           <li class="list-group-item">Office Number: ${officeNumber}</li>
        </ul>
      </div>
    </div>`;
};

const makeTeamInfoHTML = (entireTeam) => {
  const generateCard = (teamMember) => {
    if (teamMember instanceof Manager) {
      return generateManagerCard(teamMember);
    }

    if (teamMember instanceof Engineer) {
      return generateEngineerCard(teamMember);
    }

    if (teamMember instanceof Intern) {
      return generateInternCard(teamMember);
    }
  };

  const htmlCards = entireTeam.map(generateCard);

  return htmlCards;
};

module.exports = makeTeamInfoHTML;
