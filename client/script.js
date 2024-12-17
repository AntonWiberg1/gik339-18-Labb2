async function fetchUsers() {
  // uppgift 6. Den skickar en HTTP-get förfrågan till den specificerade adressen /users.
  const response = await fetch("http://localhost:3000/users");

  const users = await response.json(); //Detta är en asynkron operation som omvandlar resonse till ett Js-objekt.

  return users;
}
// vi valde async await då vi kodat i dotnet förut och det är så man hanterar det i dotnet.

async function DisplayUsers() {
  // uppgift 7. ligger i en egen funktion, kan bara använda await i andra funktioner.
  const areaToPlace = document.getElementById("generatedIdContent");
  const newUl = document.createElement("ul");
  const users = await fetchUsers();
  newUl.classList.add("list-group", "shadow-sm");

  // vi använda classlist för att lägga till klasser på elementen och med hjälp av bootstrap
  users.forEach((user) => {
    const newLi = document.createElement("li");
    newLi.classList.add("list-group-item", "bg-dark", "bg-gradient");
    newLi.textContent = `${user.firstName} ${user.lastName} ${user.username}`;
    newUl.appendChild(newLi);
    const color = user.color;
    newLi.style.color = color;
  });
  areaToPlace.appendChild(newUl);
}

DisplayUsers();
