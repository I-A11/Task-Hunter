class TaskManger {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  addTask(name, description, assigndTo, dueDate, status) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assigndTo: assigndTo,
      dueDate: dueDate,
      status: status,
    };
    this.tasks.push({ task });
  }
}
