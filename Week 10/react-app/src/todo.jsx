import Task from './task';

export default function Todo() {
  let tasks = [
    {
      id: 0,
      taskName: 'Attend MERN Class',
      date: new Date().getDate(),
      isCompleted: true,
    },
    {
      id: 0,
      taskName: 'Complete Assignment',
      date: new Date().getDate(),
      isCompleted: false,
    },
    {
      id: 0,
      taskName: 'Attend Mid Exams',
      date: new Date().getMinutes(),
      isCompleted: false,
    },
    {
      id: 0,
      taskName: 'Create React Project',
      date: new Date().getDate(),
      isCompleted: false,
    },
  ];

  let renderedTasks = tasks.map((task) => {
    return (
      <Task
        id={task.id}
        taskName={task.taskName}
        date={task.date}
        isCompleted={task.isCompleted}
      />
    );
  });

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <input type="text" className="form-control" />
              <button className="mx-2 btn btn-success">Add</button>
            </div>
          </div>
        </div>
        {renderedTasks}
      </div>
    </>
  );
}
