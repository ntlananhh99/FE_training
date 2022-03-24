import React, {useEffect} from "react";
import { StyledAlert } from "./styles/Alert.styled";
const Alert= ({type, msg, removeAlert, list}) =>{
    useEffect(()=>{
        const timeout= setTimeout(() => {
            removeAlert()
        }, 3000);
        return () => clearTimeout(timeout)
    }, [list])
  return (
    <StyledAlert>
      <p className="{`alert alert-${type}`}">
        {msg}
      </p>
    </StyledAlert>
  );
}
export default Alert;