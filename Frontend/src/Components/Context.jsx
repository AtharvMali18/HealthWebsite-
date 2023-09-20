/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState('Stranger🤚');
    const [Authenticated, setAuthenticated] = useState(false);

    const setUser = (name) => {
        setUserName(name);
    };

    const AuthenticatePerson = () => {
        setAuthenticated(true);
    }

    return (
        <UserContext.Provider value={{ userName, setUser , Authenticated , AuthenticatePerson}}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
