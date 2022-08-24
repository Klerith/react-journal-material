import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
export const RandomWord = () => {
  const { notes } = useSelector((state) => state.journal);

  const [word, setWord] = useState("");

  let filterEmptyNotes = notes.filter((note) => note.title !== "");
  let filterEmptyTitles = filterEmptyNotes.filter((note) => note.body !== "");
  let filterRepeatedTitles = filterEmptyTitles.filter((note, index) => {
    return filterEmptyTitles.findIndex((t) => t.title === note.title) === index;
  });

  function SortArray(a, b) {
    return a.title.localeCompare(b.title);
  }

  const sortedNotes = filterRepeatedTitles.sort(SortArray);

  const getRandomWord = () => {
    let randomIndex = Math.floor(Math.random() * notes.length);
    setWord(sortedNotes[randomIndex]);
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  return (
    <div>
      {notes.length > 0 ? (
        <div className={styles.randomWord}>
          <div className={styles.card}>
            <h2>{word?.title}:</h2>
            <p>{word?.body}</p>
          </div>
          <div className={styles.newWord}>
            <button className={styles.button} onClick={getRandomWord}>
              Nueva palabra
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.noWords}>
          <h2>Todavía no tenés palabras.</h2>
          <p>Agregá alguna para empezar.</p>
        </div>
      )}
    </div>
  );
};
