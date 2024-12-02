import React, { useState } from "react";
import styles from "./header.module.scss";

const header = () => {
  return (
    <>
      <header className="styles.header">
        <h1>Bayer Healthcare</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Health Topics</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="styles.hero-banner">
        <h1>Your Health, Our Priority</h1>
        <p>
          Explore the latest health information and resources from Bayer
          Healthcare
        </p>
      </div>
    </>
  );
};

export default header;
