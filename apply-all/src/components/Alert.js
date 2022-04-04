import React, { useEffect } from "react";
import { StyledAlert } from "./styles/Alert.styled";
const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000);
    return () => clearTimeout(timeout)
  }, [list])
  return (
    <StyledAlert>
      <div className={`alert-box ${type}`}>
        <div className="alert-content">
          <div className="alert-icon">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <div className="text">
            <h3>{type}</h3>
            <p>{msg}</p>
          </div>
        </div>
      </div>
    </StyledAlert>
  );
}
export default Alert;