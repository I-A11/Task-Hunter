// navbar
const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// validation form data

const form = document.querySelector("#form");
const taskName = document.querySelector("#task-name");
const description = document.querySelector("#task-info");
const assigned = document.querySelector("#assigned");

//

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
function checkInputs() {
  //Task Name validation
  const taskNameValue = taskName.value.trim();
  if (taskNameValue === "") {
    setErrorFor(taskName, "Task Name cannot be blank");
  } else {
    setSuccessFor(taskName, "Looks good!");
  }

  // Desvription validation
  const descriptionValue = description.value.trim();
  if (descriptionValue.length < 5) {
    setErrorFor(
      description,
      "Description needs to be 5 characters long or more "
    );
  } else {
    setSuccessFor(description, "Looks good!");
  }

  // Assigned validation
  const assignedValue = assigned.value.trim();
  if (assignedValue === "") {
    setErrorFor(assigned, "Assignee's name cannot be blank");
  } else {
    setSuccessFor(assigned, "Looks good!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".small");

  small.innerText = message;
  formControl.classList.add("error");
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".small");
  small.innerText = message;
  formControl.classList.add("error");
}

// Date validation
const date = new Date();
let todayDate = date.getDate();
if (todayDate < 10) {
  todayDate = "0" + todayDate;
}
let month = date.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}
const year = date.getFullYear();
const minDate = year + "-" + month + "-" + todayDate;
document.querySelector("#date").setAttribute("min", minDate);
console.log(minDate);
