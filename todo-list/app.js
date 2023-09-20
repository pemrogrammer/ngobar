const formInput = document.getElementById("form-input"),
  listItem = document.getElementById("list");

function create() {
  if (formInput.value !== "" && formInput.value.length > 3) {
    const li = document.createElement("li"),
      btn = document.createElement("button");

    btn.setAttribute("class", "remove-item");
    btn.setAttribute("onclick", "removeItem(event)");
    btn.appendChild(document.createTextNode("X"));

    li.appendChild(btn);
    li.appendChild(document.createTextNode(formInput.value));

    listItem.appendChild(li);

    formInput.value = "";
  }
}

function removeItem(event) {
  event.target.parentNode.remove();
}

function clearAll() {
  listItem.innerHTML = "";
}
