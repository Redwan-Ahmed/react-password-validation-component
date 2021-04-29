import React, { useState, useEffect } from "react";

const Password = () => {
  const [pw, setPw] = useState("");
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [lengthPw, setLengthPw] = useState(true);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (pw !== "") {
      setEmpty(false);
    } else if (pw === "") {
      setEmpty(true);
    }

    if (/[a-z]/.test(pw)) {
      setLowercase(false);
    } else {
      setLowercase(true);
    }

    if (pw.length >= 8) {
      setLengthPw(false);
    } else {
      setLengthPw(true);
    }

    if (/[A-Z]/.test(pw)) {
      setUppercase(false);
    } else {
      setUppercase(true);
    }

    if (/[0-9]/.test(pw)) {
      setNumbers(false);
    } else {
      setNumbers(true);
    }
  }, [pw]);

  return (
    <div>
      <div className="ui segments">
        <div className="ui segment">
          <div className="ui form">
            <label>Password:</label>
            <div className={`field ${empty ? "error" : ""}`}>
              <div className="ui left icon input">
                <i className={`${empty ? "red" : ""} lock icon`}></i>
                <input
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="Password"
                  className="input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui message">
        <h3 className="ui center aligned header">Password Validation:</h3>
        <br></br>
        <div>
          {lengthPw ? (
            <div className="ui left icon basic large label">
              <i className="red remove circle icon"></i>
              <label style={{ color: "red" }}>
                Password must be at least 8 characters
              </label>
            </div>
          ) : (
            <div className="ui left icon basic large label">
              <i className="green checkmark icon"></i>
              <label style={{ color: "green" }}>
                Password has at least 8 characters
              </label>
            </div>
          )}
        </div>
        <br></br>
        <div>
          {lowercase ? (
            <div className="ui left icon basic large label">
              <i className="red remove circle icon"></i>
              <label style={{ color: "red" }}>
                Password needs a lowercase!
              </label>
            </div>
          ) : (
            <div className="ui left icon basic large label">
              <i className="green checkmark icon"></i>
              <label style={{ color: "green" }}>
                Password contains a lowercase.
              </label>
            </div>
          )}
        </div>
        <br></br>
        <div>
          {uppercase ? (
            <div className="ui left icon basic large label">
              <i className="red remove circle icon"></i>
              <label style={{ color: "red" }}>
                Password needs an uppercase!
              </label>
            </div>
          ) : (
            <div className="ui left icon basic large label">
              <i className="green checkmark icon"></i>
              <label style={{ color: "green" }}>
                Password contains a uppercase.
              </label>
            </div>
          )}
        </div>
        <br></br>
        <div>
          {numbers ? (
            <div className="ui left icon basic large label">
              <i className="red remove circle icon"></i>
              <label style={{ color: "red" }}>Password needs a number!</label>
            </div>
          ) : (
            <div className="ui left icon basic large label">
              <i className="green checkmark icon"></i>
              <label style={{ color: "green" }}>
                Password contains a number.
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Password;
