
import './App.css';
import React from "react";
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import TodoList from './components/TodoList';
import Users from './components/Users';
import FormSignup from './components/FormSignup';
import FormSignin from './components/FormSignin';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const api = axios.create({
      contentType:'application/json',
      baseURL: "https://reqres.in/" 
    });

function App() {

      const login= async (data) => {
            console.log(data)
            // data= JSON.stringify(data)
            await api.post("/api/login", data)
              .then(response => console.log(response.data))
              .then(response => response.data)
              .catch (err => console.log(err.statusText));
      }   
  return (
    <div className="App">
        
        <Router>
          <Header/>  
            <Routes>      
              <Route exact path='/' element={
                    <Home />}>
              </Route>
              <Route exact path='/signup' element={
                    <FormSignup />}>
              </Route>
              <Route exact path='/signin' element={
                    <FormSignin login={login} />}>
              </Route>
              <Route exact path='/todolist' element={
                    <TodoList />}>
              </Route>
              
              <Route exact path='/users' element={
                    <Users />}>
              </Route>
            </Routes>
              
        </Router>
    </div>
  );
}

export default App;
