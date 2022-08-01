// import React from "react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';


const Home = () => {
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
        
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
            <NavLink to ="/adduser">
            <button type="button" className="mt-3 btn btn-success btn-sm">Add User</button>
            </NavLink>
            <NavLink to ="/login">
            <button type="button" className="mt-3 btn btn-success btn-sm">Login</button>
            </NavLink>
            </div>
          </div>
        </div>
       





        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Sr.No.</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Edit Button</th>
      <th scope="col">Delete Button</th>
    </tr>
  </thead>
   {
            userData.map((row,index) => {
                return(
  <tbody>
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.mobNumber}</td>
      
      <td><NavLink exact to = {`/edit/${row._id}`} >
        <button type="button" class="btn btn-success">Edit User</button>
        </NavLink></td>
      
      
      <td><NavLink exact to = {`/delete/${row._id}`} >
        <button type="button" class="btn btn-danger">Delete User</button>
        </NavLink></td>
      
    </tr>
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button type="button" class="btn btn-success">Edit User</button></td>
      <td><button type="button" class="btn btn-danger">Delete User</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button type="button" class="btn btn-success">Edit User</button></td>
      <td><button type="button" class="btn btn-danger">Delete User</button></td>
    </tr> */}
  </tbody>
                );
            })
          }
</table>
        </>
    )
}
export default Home;