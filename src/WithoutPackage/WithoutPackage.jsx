import React from "react";
import "./style.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function WithoutPackage() {
  const generatePDF = () => {
    const capture = document.querySelector("#container");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("receipt.pdf");
    });
  };
  return (
    <>
      <div id="container">
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
      <button onClick={generatePDF}>Generate PDF</button>
    </>
  );
}

export default WithoutPackage;
