import { useContext } from 'react';
import AppContext from '../../../Context/AppProvider';

const Subjects = () => {
    const {userProfile} = useContext(AppContext);

  return (
    <div>
        <h1>Subjects</h1>
        {userProfile ?
        <p>{userProfile.firstName}</p>  
        : <p>nothing yet</p>  
    }
    </div>
  )
}

export default Subjects;