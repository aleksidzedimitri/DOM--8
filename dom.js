const persons = [];

function addPerson() {
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;

  const person = { name, lastname, email, gender };

  persons.push(person);

  updateTable();

  document.getElementById("personForm").reset();
}

function updateTable() {
  const personList = document.getElementById("personList");
  personList.innerHTML = "";

  persons.forEach((person) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${person.name}</td>
            <td>${person.lastname}</td>
            <td>${person.email}</td>
            <td>${person.gender}</td>
        `;
    personList.appendChild(row);
  });
}

function sortTable(field) {
  persons.sort((a, b) => {
    if (a[field] < b[field]) return -1;
    if (a[field] > b[field]) return 1;
    return 0;
  });

  updateTable();
}
