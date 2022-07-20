import React from "react";
import { useSelector } from "react-redux";

export const RandomWord = () => {
  const { notes } = useSelector((state) => state.journal);

  const filterEmptyNotes = notes.filter((note) => note.body.length > 0);

  const getRandomWord = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const randomWord = getRandomWord(filterEmptyNotes);

  return (
    <div>
      {notes.length > 0 ? (
        <div className="randomWord">
          <div className="card">
            <h2>{randomWord.title}:</h2>
            <p>{randomWord.body}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
