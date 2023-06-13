import Task from './task';

/**
 * ES6 Javascript
 * ES Modules
 */
export default function Todo() {
  let tasks = [
    {
      id: 1,
      name: 'Nashta Karo',
      date: new Date(),
      isCompleted: true,
    },
    {
      id: 2,
      name: 'Bag Uthaao',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: 3,
      name: 'Class Attend karo',
      date: new Date(),
      isCompleted: false,
    },
    {
      id: 4,
      name: 'Time zaya Karo',
      date: new Date(),
      isCompleted: false,
    },
  ];

  function addTask(event, taskName) {
    event.preventDefault();
    tasks.push({
      id: tasks.length + 1,
      name: 'Attend BanoQabil Web Development class',
      date: new Date(),
      isCompleted: false,
    });

    console.log(tasks);
  }

  return (
    <>
      <div className="container">
        <div className="card mt-2">
          <div className="card-body">
            <div className="row">
              <form onSubmit={addTask}>
                <div className="col-md-10">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2">
                  <input className="btn btn-primary d-inline" type="submit" />
                </div>
              </form>
            </div>
            {tasks.map((task) => (
              <Task taskName={task.name} id={task.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
