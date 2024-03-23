import React, { useContext } from "react";
import UserContext from "./userContext";
const UserContextDemo = () => {
    const { user, login, logout } = useContext(UserContext);
    return (
        <div>
            {user ? (
                <div>
                    <p> Welcome,{user}!</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p> Please login</p>
                    <button onClick={() => login("vvit")}>Login</button>
                </div>
            )}
        </div>
    );
};
export default UserContextDemo;
