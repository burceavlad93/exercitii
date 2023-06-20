"use strict";

const redCircle = document.getElementById("redCircle");
const blueCircle = document.getElementById("blueCircle");
const redSquare = document.getElementById("redSquare");
const blueSquare = document.getElementById("blueSquare");

// ----------------------------------------------- Setting the draggable element --------------------------------------------------------------------------
redCircle.addEventListener("dragstart", dragStart);
blueCircle.addEventListener("dragstart", dragStart);
// ----------------------------------------------- Setting the drop target --------------------------------------------------------------------------------
redSquare.addEventListener("dragover", dragOver);
blueSquare.addEventListener("dragover", dragOver);

redSquare.addEventListener("drop", drop);
blueSquare.addEventListener("drop", drop);
// ----------------------------------------------- Getting data of draggable element ----------------------------------------------------------------------
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}
// ----------------------------------------------- Prevent browser default on drop event ------------------------------------------------------------------
function dragOver(event) {
  event.preventDefault();
}
// ----------------------------------------------- Drop Event ---------------------------------------------------------------------------------------------
function drop(event) {
  event.preventDefault(); // Prevent browser default

  const draggedCircleId = event.dataTransfer.getData("text/plain"); // Getting element ID
  const draggedCircle = document.getElementById(draggedCircleId); // Getting HTML element based on ID
  const targetSquare = event.target; // Getting HTML reference of the drag over element
  const targetSquareColor = targetSquare.classList.contains("blue") ? "blue" : "red"; // Ternary operator to determine the class color of the sqaure element

  // If the colors match, place the circle in the center of the square
  if (draggedCircle.classList.contains(targetSquareColor)) {
    targetSquare.appendChild(draggedCircle);
    draggedCircle.style.left = "25px";
    draggedCircle.style.top = "25px";
  } else {
    // If the colors don't match, reset the position of the dragged circle
    draggedCircle.style.left = "";
    draggedCircle.style.top = "";
  }
}
