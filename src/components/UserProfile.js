import React from "react";

export default function UserProfile(props) {
  const logout = () => {
    global.auth.logout();
    props.close("logout");
  };
  return (
    <div className="user-profile-wrap">
      <h4 className="text-center">Profile</h4>
      <div>
        <div className="form-group">
          <label htmlFor="">Nickname：</label>
          <input
            type="text"
            className="form-control"
            defaultValue={props.user.nickname}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email：</label>
          <input
            type="text"
            className="form-control"
            defaultValue={props.user.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Type：</label>
          <input
            type="text"
            className="form-control"
            defaultValue={props.user.type === 1 ? "Manager" : "General User"}
          />
        </div>
        <div className="btn-wrap form-group d-flex justify-content-between">
          <button
            className="btn btn-secondary"
            onClick={() => {
              props.close();
            }}
          >
            Cancel
          </button>
          <button className="btn btn-primary" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
