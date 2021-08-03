// navbar
const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// make new taskmanger
const taskManger = new TaskManger();
// validation form data

const form = document.querySelector("#form");
const taskName = document.querySelector("#task-name");
const description = document.querySelector("#task-info");
const assigned = document.querySelector("#assigned");
const dueDate = document.querySelector("#date");
const status = document.querySelector("#status");
////////////////
const formControl = document.querySelector("#form-control");
const formDescription = document.querySelector("#form-description");
const formDate = document.querySelector("#form-date");
const formAssigned = document.querySelector("#form-assigned");
const formStatus = document.querySelector("#form-status");
let validationFail = 0;

//

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // clear all inputs after submission
  const clearFields = () => {
    taskName.value = "";
    description.value = "";
    assigned.value = "";
    status.value = "Select task status";
    dueDate.value = "";
    formControl.classList.remove("error");
    formDescription.classList.remove("error");
    formDate.classList.remove("error");
    formAssigned.classList.remove("error");
    formStatus.classList.remove("error");
  };
  checkInputs();
  if (validationFail > 0) {
    validationFail = 0;
    return;
  } else {
    //push valid input into task array

    taskManger.addTask(
      taskName.value,
      description.value,
      assigned.value,
      dueDate.value,
      status.value
    );
    clearFields();
  }
});

function checkInputs() {
  //Task Name validation
  const taskNameValue = taskName.value.trim();
  if (taskNameValue === "") {
    setErrorFor(taskName, "Task Name cannot be blank");
    validationFail++;
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
    validationFail++;
  } else {
    setSuccessFor(description, "Looks good!");
  }

  // Assigned validation
  const assignedValue = assigned.value.trim();
  if (assignedValue === "") {
    setErrorFor(assigned, "Assignee's name cannot be blank");
    validationFail++;
  } else {
    setSuccessFor(assigned, "Looks good!");
  }

  //date validation
  const dueDateValue = dueDate.value;
  if (!dueDateValue) {
    setErrorFor(dueDate, "Due Date cannot be empty");
    validationFail++;
  } else {
    setSuccessFor(dueDate, "Looks good!");
  }

  //status validation
  const statusValue = status.value;
  if (statusValue === "Select task status") {
    setErrorFor(status, "Status cannot be empty");
    validationFail++;
  } else {
    setSuccessFor(status, "Looks good!");
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
