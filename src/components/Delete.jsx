//import React from "react";
import React,{useState,useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

const Delete = () => {

    const navigate = useNavigate(); 
    const {userID} = useParams();
    console.log(userID);
   

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobNumber, setMobNumber] = useState();
    const [password, setPassword] = useState("");

    const[userData,setUserData] = useState([]);


    useEffect(() => {
        axios.delete(`http://localhost:5000/user/${userID}`)
        .then(async(res) => {
          const rawData = await res.data[0];
  
          setFirstName(rawData.firstName);
          setLastName(rawData.lastName);
          setMobNumber(rawData.mobNumber);
          setPassword(rawData.password);
  
          console.log(rawData);
          setUserData(rawData);
        }).catch(err => console.log(err));
      
      },[]);

      console.log(userData);

    const deleteHandler = (e) => {
        e.preventDefault();
    
        const dataObj = { 
          firstName,
          lastName,
          mobNumber,
          password
        }
        console.log(dataObj);
        axios.delete(`http://localhost:5000/user/${userID}`)
        .then(res => {
          alert("User Deleted Successfully");
          navigate("/home");
        }).catch(err => {
          alert(err);
        })
       
      }
  

    return(
        <>
        <div>
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={() => navigate('/home')}>Cancle</button>
        </div>
        </>
    );
}
export default Delete;