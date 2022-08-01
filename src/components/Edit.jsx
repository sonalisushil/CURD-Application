import React from "react";
import {useState, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

const Edit = () => {

  const navigate = useNavigate(); 
  const {userID} = useParams();
  console.log(userID);
   

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobNumber, setMobNumber] = useState();
    const [password, setPassword] = useState("");

    const[userData,setUserData] = useState([]);
    
    useEffect(() => {
      axios.get(`http://localhost:5000/user/${userID}`)
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

    const updateHandler = (e) => {
        e.preventDefault();
    
        const dataObj = { 
          firstName,
          lastName,
          mobNumber,
          password
        }
        console.log(dataObj);
        axios.put(`http://localhost:5000/user/${userID}`,dataObj)
        .then(res => {
          alert("User Updated Successfully");
          navigate("/home");
        }).catch(err => {
          alert(err);
        })
       
      }
    return(
        <>
         <div class="row">
              <form onSubmit={updateHandler}>
        <div class="col">
        
          <input type="text" class="form-control" placeholder="First name" aria-label="First name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
        </div>
        <div class="col">
          <input type="number" class="form-control" placeholder="Mob number" aria-label="Mob number" onChange={(e) => setMobNumber(e.target.value)} value={mobNumber}/>
        </div>
        <div class="col">
          <input type="password" class="form-control" placeholder="Password" aria-label="Password"onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        
        
                  <div className="col d-flex justify-content-center">
                  <button type="submit" className="mt-3 btn btn-success btn-sm">Update</button>
                  </div>
                </form>
                </div>
             
        </>

    );
}
export default Edit;