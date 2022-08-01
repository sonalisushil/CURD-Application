import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

const Login = () => {

    const navigate = useNavigate();
    //const {userID} = userParams();

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState("");

    const [userData, setUserData] = useState();

    useEffect (() => {
        axios.get("http://localhost:5000/user")
        .then(async (res) => {
            const rawData = res.data;

            console.log(rawData);
            setUserData(rawData);
        }).catch(err => console.log(err));
    }, []);

    const loginHandler = (e) => {
        e.preventDefault();

        const rawData = userData.filter(async(data) => {
            const matchPass = await bcrypt.compare(userPassword, data.password);
            if(data.email == userEmail && matchPass == true){
                return(
                    {data}
                );
            }
        })
        console.log(rawData);
        const filteredData = rawData[0]._id;
        console.log(filteredData);
        navigate(`/dashboard/${filteredData}`)
    }
    return(
        <>
        <form onSubmit={loginHandler}>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-lable">Email</label>
                <input type="email" class="form-control w-50 p-2" id="formGroupExampleInput2" placeholder="Enter Email" autoComplete="off" name="email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail}/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-lable">Password</label>
                <input type="password" class="form-control w-50 p-2" id="formGroupExampleInput2" placeholder="Enter Password" name="password" onChange={(e) => setUserPassword(e.target.value)} value={userPassword}/>
            </div>
            <button className="btn btn-primary mt-3" type="sumbit">Login</button>
        </form>

        </>
    );
}
export default Login;