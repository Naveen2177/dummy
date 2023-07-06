import React, { useEffect, useState } from "react";
import "../styles/traffic.css";

const Traffic = () => {
  const [signal, setSignal] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      if (signal === "red") {
        setSignal("yellow");
      } else if (signal === "yellow") {
        setSignal("green");
      } else if (signal === "green") {
        setSignal("red");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [signal]);

  return (
    <div>
      <nav className="light">
        <div className={`rounded-circle mt-5 ${signal === "red" ? "bg-danger":""}`}></div>
        <div className={`rounded-circle mt-1 ${signal === "yellow" ? "bg-warning":""}`}></div>
        <div className={`rounded-circle mt-1 ${signal === "green" ? "bg-success": ""}`}></div>
      </nav>
    </div>
  );
};

export default Traffic;
