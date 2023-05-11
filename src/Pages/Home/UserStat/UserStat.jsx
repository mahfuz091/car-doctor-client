// import React from 'react';

import { useContext, } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const UserStat = () => {
    const { userStatus, setUserStatus } = useContext(AuthContext)

    console.log(userStatus);


    const handlestatus = (e) => {
        e.preventDefault();
        const form = e.target;






        if (form.status.value !== null) {
            setUserStatus(form.status.value)
        }











    }
    return (
        <div>
            <h1>{userStatus}</h1>
            <form onSubmit={handlestatus}>
                <input className="border" type="text" name="status" id="" />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default UserStat;