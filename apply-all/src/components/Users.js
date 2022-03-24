import React from "react";
import ListUsers from "./ListUsers";
import { Navigate } from 'react-router-dom';

function Users() {
    if (!localStorage.getItem("accessToken")) {
        return <Navigate to="/signin" replace />;
      }
    
    return (
      <div> 
        <ListUsers/>
      </div>
      )    
}

export default Users;
