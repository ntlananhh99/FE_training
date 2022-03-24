import React from "react";
import { Navigate } from 'react-router-dom';

function Users() {
    if (!localStorage.getItem("accessToken")) {
        return <Navigate to="/signin" replace />;
      }
    
      return <div> 
        <p>User</p>
        <p>User</p>
        <p>User</p>
        <p>User</p>
        <p>User</p>
        </div>;    
        

}

export default Users;
