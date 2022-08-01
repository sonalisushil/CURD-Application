import axios from "axios";
import React, { useEffect, useState } from "react";


const Fetchdata = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/user")
        .then(async(res) => {
           // console.log(res.data);
           const rawData =await res.data;
           console.log(rawData);
           setUserData(rawData);
        }).catch(err => console.log(err));
    },[]);

    console.log(userData);
    return(
        <>
        {
            userData.map((row) => {
                return(
                    <p>{row.firstName}</p>
                );
            })
        }
        </>
    )
}
export default Fetchdata;