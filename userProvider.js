import React, { useState } from "react";
import UserContext from "./userContext";
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = (name) => {
        setUser(name);
    };
    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;