import React, {createContext, useState} from 'react';
export const FormListContext = createContext();

const FormListContextProvider = ({ children }) => {
    const [tableData, setTableData] = useState([]);

return (
<FormListContext.Provider value={{tableData,setTableData}}>
    {children}
</FormListContext.Provider>
);
}
export default FormListContextProvider;