import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RandomWord } from "../components/RandomWord";
import styles from "./styles.module.css";

export const DictionaryScreen = () => {
  let navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <h1
        style={{
          fontSize: "15px",
        }}
      >
        Aprendé de tus palabras.
      </h1>
      <RandomWord />
      <div className={styles.containerBtn}>
        <button className={styles.button} onClick={goToDashboard}>
          Ir al banco de palabras
        </button>
      </div>
    </div>
  );
};
