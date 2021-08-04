// navbar
const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// make new taskmanger
const taskManger = new TaskManger(0);
const form = document.querySelector("#form");

//

form.addEventListener("submit", (e) => {
  // validation form data
  const taskName = document.querySelector("#task-name");
  const description = document.querySelector("#task-info");
  const assigned = document.querySelector("#assigned");
  const dueDate = document.querySelector("#date");
  const status = document.querySelector("#status");

  const isValid = document.querySelector(".is-valid");
  const isInvalid = document.querySelector(".is-invalid");
  const descriptionValid = document.querySelector("#description-valid");
  const descriptionInvalid = document.querySelector("#description-invalid");
  const dateValid = document.querySelector("#date-valid");
  const dateInvalid = document.querySelector("#date-invalid");
  const assignedValid = document.querySelector("#assigned-valid");
  const assignedInvalid = document.querySelector("#assigned-invalid");
  const statusValid = document.querySelector("#status-valid");
  const statusInvalid = document.querySelector("#status-invalid");

  let validationFail = 0;
  // validation form data

  e.preventDefault();

  // clear all inputs after submission
  const clearFields = () => {
    taskName.value = "";
    description.value = "";
    assigned.value = "";
    status.value = "Select task status";
    dueDate.value = "";
    isValid.classList.remove("valid");
    descriptionValid.classList.remove("valid");
    dateValid.classList.remove("valid");
    assignedValid.classList.remove("valid");
    statusValid.classList.remove("valid");
  };

  if (taskName.value.length < 1) {
    isValid.classList.remove("valid");
    isInvalid.classList.add("invalid");
    validationFail++;
  } else {
    isInvalid.classList.remove("invalid");
    isValid.classList.add("valid");
  }

  if (description.value.length > 5) {
    descriptionInvalid.classList.remove("invalid");
    descriptionValid.classList.add("valid");
  } else {
    descriptionValid.classList.remove("valid");
    descriptionInvalid.classList.add("invalid");
    validationFail++;
  }
  if (dueDate.value === "") {
    dateValid.classList.remove("valid");
    dateInvalid.classList.add("invalid");
    validationFail++;
  } else {
    dateValid.classList.add("valid");
    dateInvalid.classList.remove("invalid");
  }

  if (assigned.value.length > 0) {
    assignedInvalid.classList.remove("invalid");
    assignedValid.classList.add("valid");
  } else {
    assignedValid.classList.remove("valid");
    assignedInvalid.classList.add("invalid");
    validationFail++;
  }

  if (status.value === "Select task status") {
    statusValid.classList.remove("valid");
    statusInvalid.classList.add("invalid");
    validationFail++;
  } else {
    statusValid.classList.add("valid");
    statusInvalid.classList.remove("invalid");
  }
  // ///////
  if (validationFail > 0) {
    validationFail = 0;
    return;
  } else {
    //push valid input into task array

    taskManger.addTask(
      taskName.value,
      description.value,
      dueDate.value,
      assigned.value,
      status.value
    );
    clearFields();
    taskManger.render();
  }
});

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
//////////

// const taskHtml = createTaskHtml(
//   "water the garden",
//   "put water to the garden",
//   " 05/05/2021",
//   "islam",
//   "Completed"
// );

// console.log(taskHtml);
