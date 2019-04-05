import React from "react";
import "./CuratorPick.css";
// import videoOne from "../../components/images/Blue_Light_Streaks_2Videvo.mov";
import videoTwo from "../../components/images/Matcha.mp4";
// import videoThree from "../../components/images/Your_Light.mov";
const CuratorPick = () => {
  return (
    <div className="wrapperCuratorPick">
      <div className="tracking-out-expand">
        <h1>VOR</h1>
      </div>
      <div key="1" className="pick1 embed-responsive embed-responsive-4by3">
        <p className="p1">Light Streaks</p>

        <video
          id="slide1"
          className="video-fluid1 z-depth-1"
          autoPlay
          loop
          controls
          muted
        >
          <source
            src="http://mazwai.com/system/posts/videos/000/000/037/original/Black_Ink_--FREE_FOOTAGE--HD.mp4?1402249298"
            type="video/mp4"
          />
        </video>
      </div>

      <div key="2" className="pick2 embed-responsive embed-responsive-4by3">
        <p className="p2">Matcha</p>

        <video
          id="slide2"
          className="video-fluid2 z-depth-1"
          autoPlay
          loop
          controls
          muted
        >
          <source src={videoTwo} type="video/mp4" />
        </video>
      </div>
      <div key="3" className="pick3 embed-responsive embed-responsive-4by3">
        <p className="p3">The Wind</p>
        <video
          id="slide3"
          className="video-fluid3 z-depth-1"
          autoPlay
          loop
          controls
          muted
        >
          <source
            src="http://mazwai.com/system/posts/videos/000/000/019/original/randy_perry--moon_jellies.mp4?1400499106"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default CuratorPick;
