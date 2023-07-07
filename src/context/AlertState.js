const { createContext, useState } = require('react');

const alertContext = createContext();

const AlertState = (props) => {
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type)=>{
        setAlert({msg: message, type: type}); 
        setTimeout(() => {
            setAlert(null); 
        }, 2500); 
    };
    return (
        <alertContext.Provider value={{ alert, showAlert }}>
            {props.children}
        </alertContext.Provider>
    )
}
export { alertContext, AlertState }; 
