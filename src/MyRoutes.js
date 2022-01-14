import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from './components/Counter';
import NaviBar from './components/NaviBar';
import Receipts from './components/Receipts';
import Register from './components/Register';
const MyRoutes = () => {
    return (
        <BrowserRouter>
            <NaviBar />
            <Routes>
                <Route path="/" element={<Counter />} />
                <Route path="/recepts" element={<Receipts />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;