import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogOut = ()=> {
    const { setAuth } = useAuth();

    const logOut = async () => {
        setAuth({});

        try {
            await axios.get('/api/logout', {
                withCredentials: true,
            });
        } catch (error) {
            console.error(error)
        }
    }

    return logOut;
}

export default useLogOut;