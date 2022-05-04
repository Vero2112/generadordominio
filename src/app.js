/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var dominio = [".com", ".net", ".us", ".io"];

  let sumadestrings = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let r = 0; r < adj.length; r++) {
      for (let v = 0; v < noun.length; v++) {
        for (let d = 0; d < dominio.length; d++) {
          sumadestrings += pronoun[i] + adj[r] + noun[v] + dominio[d];
          console.log("www." + sumadestrings);
          sumadestrings = "";
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
