const createTaskHtml = (id, name, description, dueDate, assigned, status) => {
  const html = `
    <div class="card" data-task-id= "${id}" >
            <h1>${name}</h1>
            <p>
              ${description}
            </p>
            <p>${dueDate}</p>
            <p>${assigned}</p>
            <div class="card-status">
              ${status}
              <span>
                <button class= "done-button completed">
                  <i class="fas fa-check done-button"></i>
                </button>
                <button class="edit edit-button" ><i class="fas fa-pen"></i></button>
                <button class="delete delete-button"><i class="fas fa-trash"></i></button>
              </span>
            </div>
          </div>
`;
  return html;
};

class TaskManger {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  addTask(name, description, dueDate, assigned, status) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      dueDate: dueDate,
      assigned: assigned,
      status: status,
    };
    this.tasks.push(task);
  }

  getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (taskId === task.id) {
        foundTask = task;
      }
    }
    return foundTask;
  }

  // render

  render() {
    let tasksHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      const date = new Date(task.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      const taskHtml = createTaskHtml(
        task.id,
        task.name,
        task.description,
        formattedDate,
        task.assigned,
        task.status
      );
      tasksHtmlList.push(taskHtml);
    }
    const taskHtml = tasksHtmlList.join("\n");
    const tasksList = document.querySelector("#task-list");
    tasksList.innerHTML = taskHtml;
  }

  save() {
    const tasksJson = JSON.stringify(this.tasks);

    localStorage.setItem("tasks", tasksJson);

    const currentId = String(this.currentId);

    localStorage.setItem("currentId", currentId);
  }

  load() {
    if (localStorage.getItem("tasks")) {
      const tasksJson = localStorage.getItem("tasks");

      this.tasks = JSON.parse(tasksJson);
    }

    if (localStorage.getItem("currentId")) {
      const currentId = localStorage.getItem("currentId");

      this.currentId = Number(currentId);
    }
  }
}
