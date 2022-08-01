import React ,{useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
//import { useState } from "react";


const Adduser = () => {
    
        const navigate = useNavigate();

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [mobNumber, setMobNumber] = useState();
        const [email,setEmail] = useState();
        const [password, setPassword] = useState("");
      
        const submitHandler = (e) => {
          e.preventDefault();
      
          const dataObj = { 
            firstName,
            lastName,
            mobNumber,
            email,
            password
          }
          console.log(dataObj);
          axios.post("http://localhost:5000/user",dataObj);
      
          setFirstName("");
          setLastName("");
          setMobNumber();
          setEmail("");
          setPassword("");
      
          navigate("/home");
        }
       
          return(
              <>
              
              <div class="row">
              <form onSubmit={submitHandler}>
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
          <input type="email" class="form-control" placeholder="Email" aria-label="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div class="col">
          <input type="password" class="form-control" placeholder="Password" aria-label="Password"onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        
        
                  <div className="col d-flex justify-content-center">
                  <button type="submit" className="mt-3 btn btn-success btn-sm">Add User</button>
                  </div>
                </form>
                </div>
             
              
              </>

    );

}
export default Adduser;