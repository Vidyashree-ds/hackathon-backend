import React, { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import styles from "./dashboard.module.scss";
import BoxContainer from "../BoxContainer/BoxContainer";

const Dashboard = () => {
  const healthTopicsList = [
    { title: "t1", content: "c1" },
    { title: "t1", content: "c1" },
    { title: "t1", content: "c1" },
    { title: "t1", content: "c1" },
  ];
  return (
    <>
      <Header />
      <div className="styles.main-container">Dashboard Page</div>
      <section className="style.box-wrapper">
        {healthTopicsList.map((item) => {
          return <BoxContainer title={item.title} content={item.content} />;
        })}
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
