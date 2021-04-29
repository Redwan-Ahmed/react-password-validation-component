import React from "react";

class User extends React.Component {

  render() {
    return (
      <div className="ui segments">
        <div className="ui segment">
          <div className="ui form">
            <label>Username:</label>
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  placeholder="Username"
                  className="input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
