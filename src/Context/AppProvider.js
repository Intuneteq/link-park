import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [userProfile, setUserProfile] = useState({});
    return (
        <AppContext.Provider value={{
            loading,
            setLoading,
            userProfile,
            setUserProfile
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;