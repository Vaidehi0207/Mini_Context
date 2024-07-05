import React from "react";
import UserContext from "./UserContext";

//this is a method
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);

    return(
        //wrap karenge aur jo bhi aa rha usko use render kra denge
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider