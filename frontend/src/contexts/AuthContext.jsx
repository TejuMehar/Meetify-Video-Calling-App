import React, { createContext,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import httpStatus from "http-status";


export const AuthContext = createContext({});

const client = axios.create({
    baseURL: "http://localhost:8000/api/v1/users",
    withCredentials: true,
});

export const AuthProvider = ({ children }) => {

    const authContext = useContext(AuthContext);

    const [userData, setUserData] = React.useState(authContext);

    const router = useNavigate();

    const handleRegister = async (name, username, password) => {
        try {
            const request = await client.post("/register", {
                name:name,
                username:username,
                password:password,
            });

            if(request.status === httpStatus.children.CREATED){
               return request.data.message;
            }
         
        } catch (error) {
            return error.response.data.message;
        }   
    };

    const handleLogin = async (username, password) => {
        try {
            const request = await client.post("/login", {
                username:username,
                password:password,
            });
            if(request.status === httpStatus.OK){
               localStorage.setItem("token",request.data.token);
            }

        } catch (error) {
            return error.response.data.message;
        }
    };


    const data = {
        userData,setUserData,handleRegister
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider> 
    )
}

