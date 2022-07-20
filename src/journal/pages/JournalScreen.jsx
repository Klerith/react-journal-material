import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const DictionaryScreen = () => {
  let navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const { notes } = useSelector((state) => state.journal);

  let filterEmptyNotes = notes.filter((note) => note.body.length > 0);
  const notesCount = filterEmptyNotes.length;
  //   const notesCount = 0;

  const getRandomWord = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const randomWord = getRandomWord(filterEmptyNotes);

  return (
    <div className={styles.container}>
      <h1>Dictionary Screen</h1>
      <div>
        {notesCount > 0 ? (
          <div className={styles.randomWord}>
            <div className={styles.card}>
              <h2>{randomWord.title}:</h2>
              <p>{randomWord.body}</p>
            </div>
          </div>
        ) : (
          <div className={styles.randomWord}>
            <div className={styles.containerCard}>
              <div className={styles.card}>
                <h2>Tenés {notesCount} palabras.</h2>
                <h2>¿Querés crear una?</h2>
                <div className={styles.containerBtn}>
                  <button
                    className={styles.button}
                    onClick={() => goToDashboard()}
                  >
                    IR AL DASHBOARD
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
