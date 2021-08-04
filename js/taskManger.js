const createTaskHtml = (name, description, dueDate, assigned, status) => {
  const html = `
    <div class="card" >
            <h1>${name}</h1>
            <p>
              ${description}
            </p>
            <p>${dueDate}</p>
            <p>${assigned}</p>
            <div class="card-status">
              ${status}
              <span>
                <button class="completed"><i class="fas fa-check"></i></button>
                <button class="edit"><i class="fas fa-pen"></i></button>
                <button class="delete"><i class="fas fa-trash"></i></button>
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

  // render

  render() {
    let tasksHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      const date = new Date(task.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      const taskHtml = createTaskHtml(
        task.name,
        task.description,
        formattedDate,
        task.assigned,
        task.status
      );
      tasksHtmlList.push(taskHtml);
    }
    const taskHtml = tasksHtmlList.join("\n");
    const taskList = document.querySelector("#task-list");
    taskList.innerHTML = taskHtml;
  }
}
