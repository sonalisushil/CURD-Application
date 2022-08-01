import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {

    const {userID} = useParams();

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userID}`)
        .then((res) => {
            const rawData = res.data[0];

            console.log(rawData);
            setUserData(rawData);
        }).catch((err) => console.log(err));
    },[]);
    return(
        <>
        <h1>Hello {userData.firstName}</h1>
        </>
    );
}
export default Dashboard;