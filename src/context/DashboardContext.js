import React, {createContext, useState} from 'react';
import FormListContextProvider from "./FormContext";
export const DashboardContext = createContext();

const DashboardContextProvider = ({ children }) => {
    const [dashboard, setDashboard] = useState([]);

    return (
        <DashboardContext.Provider value={{dashboard,setDashboard}}>
            {children}
        </DashboardContext.Provider>
    );
}
export default DashboardContextProvider;