import React from 'react';
import App from './App';
import FormSignin from './components/FormSignin';
import FormSignup from './components/FormSignup';
import TodoList from './components/TodoList';
import Home from './components/Home';
import Users from './components/Users';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const AppRoutes = () => {
    
    
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path='/todolist' element={
                            <TodoList />}>
                        </Route>

                        <Route path='/users' element={
                            <Users  /> }>
                        </Route>
                    </Route>
                    <Route path="/signin" element={<FormSignin />} > </Route>
                    <Route path="/signup" element={<FormSignup />}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes