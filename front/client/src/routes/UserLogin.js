import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserLogin = () => {

    

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Login</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="username">ID:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="userId"
                      placeholder="ID 입력"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="password 입력"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default UserLogin;