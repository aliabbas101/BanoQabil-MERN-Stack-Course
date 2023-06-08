export default function Task(props) {
  if (!props.taskName) {
    props.taskName = 'Title goes here';
  }

  return (
    <>
      <div key={props.id} className="card mt-2">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="form-check">
              <input
                checked={'checked' ? props.isCompleted : ''}
                onChange={() => {}}
                type="checkbox"
                className="form-check-input"
              />
            </div>
            <h6>{props.taskName}</h6>
            <p>{props.date}</p>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
}
