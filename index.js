// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

//replacing arrays with objects

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    //not really sure why "markCompleted" text is red here
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}


// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all poops out of litter box");
const task2 = newTask("Do laundry", "ugh");
const tasks = [task1, task2];

console.log(task1)
// task1.logTaskState()
// task1.markCompleted();
// task1.logTaskState()

//old tests for array menthod
// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
