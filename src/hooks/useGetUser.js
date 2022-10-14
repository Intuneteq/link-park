import { useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useAuth from "./useAuth";
import useAppProvider from "./useAppProvider";
import useAxiosPrivate from "./useAxiosPrivate";

const useGetUser = () => {
  const { auth } = useAuth();
  const id = useMemo(() => auth.user.id, [auth]);
  const axiosPrivate = useAxiosPrivate();
  const { userProfile, setUserProfile } = useAppProvider();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axiosPrivate.get(`/api/users/${id}`);

        // console.log("res", res.data);
        setUserProfile(res.data);
      } catch (error) {
        console.error("error from trying to get users", error);
        navigate("/Login", { state: { from: location }, replace: true });
      }
    };
    getUsers();
  }, [id, axiosPrivate, setUserProfile, location, navigate]);

  return { userProfile };
};

export default useGetUser;
