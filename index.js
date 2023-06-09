let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let container = document.getElementsByClassName("container");

let selected;

for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    selected = e.target;

    selected.classList.add("dragged");

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected.classList.remove("dragged");
      selected = null;
      displaySuccessMessage(rightBox); // Invoke success message after dropping into rightBox
    });

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected.classList.remove("dragged");
      selected = null;
      displaySuccessMessage(leftBox); // Invoke success message after dropping into leftBox
    });
  });
}

function displaySuccessMessage(box) {
  let message = document.createElement("div");
  message.textContent = "Item dropped successfully!";
  message.classList.add("success-message");
  box.appendChild(message);

  setTimeout(function () {
    message.remove();
  }, 1000);
}
