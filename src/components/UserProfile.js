import React from "react";

export default function UserProfile(props) {
  const logout = () => {
    global.auth.logout();
    props.close("logout");
  };
  return (
    <div className="user-profile-wrap">
      <h4 className="text-center mb-5">Profile</h4>
      <div>
        <div className="form-group">
          <label htmlFor="" className="fs-md-rwd">Nickname：</label>
          <input
            type="text"
            className="fs-md-rwd form-control"
            defaultValue={props.user.nickname}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="fs-md-rwd">Email：</label>
          <input
            type="text"
            className="fs-md-rwd form-control"
            defaultValue={props.user.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="fs-md-rwd">Type：</label>
          <input
            type="text"
            className="fs-md-rwd form-control"
            defaultValue={props.user.type === 1 ? "Manager" : "General User"}
          />
        </div>
        <div className="btn-wrap form-group d-flex justify-content-between">
          <button
            className="fs-md-rwd btn btn-secondary"
            onClick={() => {
              props.close();
            }}
          >
            Cancel
          </button>
          <button className="fs-md-rwd btn btn-primary" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
