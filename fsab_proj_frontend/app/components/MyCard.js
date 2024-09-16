// In order to use react hooks (`useState`, `useEffect`), we must specify that this component runs on the client
"use client";
// We import react functions
import { useEffect, useState } from "react";
// Import the styles from the css file.
import classes from "./my-card-styles.module.css";

function MyCard(props) {

  function changePage() {
    window.location.href = ("http://localhost:3000/images");
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.text}>{props.text}</p>
      <button onClick={changePage}>{props.buttonText}</button>
      <p></p>
    </div>
  );
}

export default MyCard;
