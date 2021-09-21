
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../features/user/actions";

const Userlist = ({ ping }) => {
    
    const dispatch = useDispatch();
    const list = useSelector((state) => state.Users.users);
    const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     dispatch(userActions(list));
    //   }, []);
      
    return (
        <div>
            
        </div>
    )
}

export default Userlist
