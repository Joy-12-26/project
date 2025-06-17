 let form = document.getElementById("guest-form");
let nameInput = document.getElementById("guest-name");
let list = document.getElementById("guest-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let guestName = nameInput.value;

  if (guestName === "") {
    alert("Please enter a name.");
    return;
  }

  let listItem = document.createElement("li");
  listItem.textContent = guestName;

  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function() {
    list.removeChild(listItem);
  });

  listItem.appendChild(removeButton);
  list.appendChild(listItem);

  nameInput.value ="";
});
