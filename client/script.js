async function fetchUsers() {
  const response = await fetch("http://localhost:5001/users");

  const users = await response.json();
  return users;
}

async function generateList() {
  const areaToPlace = document.getElementById("generatedContent");
  const newUl = document.createElement("ul");
  newUl.classList.add("list-group", "shadow-sm");

  const users = await fetchUsers();

  users.forEach((user) => {
    const newLi = document.createElement("li");
    newLi.classList.add("list-group-item", "bg-dark", "bg-opacity-25");
    newLi.textContent = `${user.firstName} ${user.lastName} (${user.username})`;
    newUl.appendChild(newLi);
    const color = user.color;
    newLi.style.color = color;
  });
  areaToPlace.appendChild(newUl);
}

// det här ser enormt korkat ut men eftersom att fetchUsers() skickar tillbaka ett promise så kan man inte kalla på den metoden direkt i en console.log(). Därför skapar vi en anonym arrow funktion som vi direkt kallar för att skriva ut användarna i konsollen. Man får heller inte använda await utanför metoder.
(async () => {
  const users = await fetchUsers();
  console.log(users);
})();

generateList();
