import { useContext } from 'react';
import axios from '../api/axios';
import AppContext from '../Context/AppProvider';
import useAuth from './useAuth';


const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const { setUserProfile } = useContext(AppContext)


    const refresh = async () => {
        const res = await axios.get('/api/refresh', {
            withCredentials: true
        });

        setAuth(prev => {
            return {
                ...prev,
                accessToken: res.data.accessToken,
                user: res.data.userInfo
            }
        });

        setUserProfile(prev => {
            return {
                ...prev,
                firstName: res.data.userInfo.firstName
            }
        })

        return res.data.accessToken;
    }
  return refresh;
}

export default useRefreshToken;