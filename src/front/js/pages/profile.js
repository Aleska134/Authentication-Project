import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import AuthComponent from "../component/auth";


export const Profile = () => {
    return(
        <AuthComponent>
            <p>This is the profile!!! :) </p>
        </AuthComponent>
        
    );
};