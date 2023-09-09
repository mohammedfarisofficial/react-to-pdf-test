import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { usePDF } from "react-to-pdf";
import WithoutPackage from "./WithoutPackage/WithoutPackage";

function App() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  return (
    <>
      <div id="container" ref={targetRef}>
        <img
          className="image"
          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          alt="avatar"
        />
        <h2>Name : Mohammed Faris</h2>
        <h3>React Developer</h3>
        <p id="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nulla
          eveniet voluptatum quidem, quae deserunt voluptates in harum
          aspernatur temporibus dolore distinctio illo non est sequi consectetur
          eaque. Blanditiis optio soluta pariatur tempore nam, enim quo iure ex
          magnam vero!
        </p>
      </div>
      <button onClick={() => toPDF()}>Generate PDF with package</button>
      <WithoutPackage/>
    </>
  );
}

export default App;
