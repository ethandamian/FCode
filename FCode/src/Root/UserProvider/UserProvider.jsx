import { createContext, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {

    const [user, setUser] = useState({
        email: 'user@example.com',
        password: '123456',
    });

    const login = (email, password) => {
        let resp = 'error en el servidor';


        if (email === user.email && password === user.password) {
            setUser({ email, password });
            resp = null;
        } else {
            resp = 'Email o contraseña incorrectos';
        }

        return resp;

    }

    const logout = () => {
        setUser(null);

    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
