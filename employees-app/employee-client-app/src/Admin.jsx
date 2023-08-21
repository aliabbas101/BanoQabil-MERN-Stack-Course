import { Link, Outlet, useNavigate } from "react-router-dom";

const Admin = () => {

    const navigate = useNavigate();
    const logout= () =>{
        localStorage.removeItem("token");
        navigate("/login");
    };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Blogging Site
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a onClick={logout} className="nav-link active" aria-current="page" href="#">
                  Logout
                </a>
              </li>
     
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Admin;
