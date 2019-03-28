import React from "react";
import './CuratorPick.css';
const CuratorPick = () => {
    return (
        <div className="wrapperCuratorPick">
     <div key= "1" className="pick1 embed-responsive embed-responsive-4by3">
     <video id = "slide1" className="video-fluid1 z-depth-1" autoPlay loop controls muted>
  <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" /></video>
         </div>
     <div key= "2" className="pick2 embed-responsive embed-responsive-4by3">
     <video id = "slide2" className="video-fluid2 z-depth-1" autoPlay loop controls muted>
  <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" /></video>
 </div> 
 <div key= "3" className="pick3 embed-responsive embed-responsive-4by3">
    <video id = "slide3" className="video-fluid3 z-depth-1" autoPlay loop controls muted>
  <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" /></video>
</div>
</div>
)
};

export default CuratorPick; 
