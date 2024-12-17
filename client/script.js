async function fetchUsers() {
  const response = await fetch("http://localhost:3000/users");

  const users = await response.json();

  return users;
}

console.log(fetchUsers());

async function DisplayUsers() {
  const areaToPlace = document.getElementById("generatedIdContent");
  const newUl = document.createElement("ul");
  const users = await fetchUsers();
  newUl.classList.add("list-group", "shadow-sm");

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
