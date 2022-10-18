import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import Loading from "../Constants/Loading";

const PersistentLogin = () => {
  const [loading, setLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
    setLoading(true)
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setLoading(false);

    return () => (isMounted = false);
  }, [auth, refresh]);

  return (
    <>{!persist ? <Outlet /> : loading ? <Loading /> : <Outlet />}</>
  );
};

export default PersistentLogin;
