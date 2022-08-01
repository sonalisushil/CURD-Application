import React from "react";
import Logo from "../Images/images-7.jpeg";
import Logo1 from "../Images/images-8.jpeg";
import Logo2 from  "../Images/images-9.jpeg";

const Imageslide = () => {
    return(
        <>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active Logo">
      <img src={Logo} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item Logo1">
      <img src={Logo1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item Logo2">
      <img src={Logo2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default Imageslide;