import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import Home from './components/pages/Home'
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import FormMaker from "./components/pages/FormMaker";
import FormListContextProvider from "./context/FormContext";
import DashboardContextProvider from "./context/DashboardContext";
import Dashboard from "./components/pages/Dashboard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


          <Router>
              <FormListContextProvider>
                  <DashboardContextProvider>

              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/creatform/:index?" element={<FormMaker/>} />
                  <Route path="/dashboard" element={<Dashboard/>} />
              </Routes>
                  </DashboardContextProvider>
              </FormListContextProvider>


          </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
