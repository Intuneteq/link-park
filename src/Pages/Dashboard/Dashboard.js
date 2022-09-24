import React, 
{ 
  // useEffect, useContext 
} from "react";
// import { useNavigate, 
//   useLocation 
// } 
//   from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Dashboard.scss";
import BoardNav from "../../DashboardComponents/BoardNav";
import BoardSubjects from "../../DashboardComponents/BoardSubjects";
import BoardActivities from "../../DashboardComponents/BoardActivities";
import BoardSchedule from "../../DashboardComponents/BoardSchedule";
import { selectCurrentToken, selectCurrentUser } from "../../StateManager/auth/authSlice";
// import useAuth from "../../hooks/useAuth";
// import useAxiosPrivate from "../../hooks/useAxiosPrivate";
// import AppContext from "../../Context/AppProvider";
// import useLogOut from "../../hooks/useLogOut";

const Dashboard = () => {
  // const {auth} = useAuth();
  // const logOut = useLogOut();
  // const { userProfile, setUserProfile } = useContext(AppContext);
  // const axiosPrivate = useAxiosPrivate();
  // const navigate = useNavigate();
  // const location = useLocation();

  // const id = auth.user.id;

  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();
    

  //   const getUsers = async () => {
  //     try {
  //       const res = await axiosPrivate.get(`/api/users/${id}`,{
  //         signal: controller.signal
  //       });

  //       const userDetail = {
  //         firstName: res.data.firstName,
  //         lastName: res.data.lastName,
  //         phoneNumber: res.data.phoneNumber
  //       }
        
  //       isMounted && setUserProfile(userDetail)

  //     } catch (error) {
  //       console.error('error from trying to get users', error)
  //       navigate('/Login', { state: { from: location }, replace: true });
  //     }
  //   }
  //     getUsers();

  //   return () => {
  //         isMounted = false;
  //           controller.abort();
  //   };
  // }, [axiosPrivate, navigate, setUserProfile, location, id]);

  // const signOut = async () => {
  //   await logOut();
  //   navigate('/')
  // }
  
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)
  console.log(token);

  return (
    <div className="dashboard">
      <div className="board app__flex-3">
        <BoardNav />
        <div className="board__content">
          <div className="board__content-head">
            <h1>Hey {user},</h1>
            <button onClick=''>sign out</button>
            <p>It's sunny today and it's time to study</p>
            <Link to='/leeny/dashboard/subjects'>user</Link>
          </div>
          <BoardSubjects />
          <BoardActivities />
        </div>
        <BoardSchedule />
      </div>
    </div>
  );
};

export default Dashboard;
