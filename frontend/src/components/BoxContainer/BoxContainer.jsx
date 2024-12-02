import React, { useState } from "react";
import styles from "./boxcontainer.module.scss";

const BoxContainer = (props) => {
    
  return (
    <div className="styles.box-wrapper">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <a href="#" className="box-btn">Learn More</a>
    </div>
  );
};

export default BoxContainer;
