"use strict";
// Create table
const list = [
  ["A1", "B1", "C1"],
  ["A1", "B1", "C2"],
  ["A1", "B1", "C3"],
  ["A1", "B2", "C4"],
  ["A1", "B2", "C5"],
  ["A1", "B3", "C6"],
  ["A2", "B4", "C7"],
  ["A2", "B5", "C8"],
  ["A2", "B5", "C9"],
  ["A3", "B6", "C10"],
];

const selectInput_A = document.getElementById("selectA");
const selectInput_B = document.getElementById("selectB");
const selectInput_C = document.getElementById("selectC");
const table = document.getElementById("list");
const tableBody = table.querySelector("tbody");
// -------------------------------------------------------- Render Full Table ---------------------------------------------------------------------------
function renderTable() {
  for (let i = 0; i < list.length; i++) {
    // Loop through every line
    const row = document.createElement("tr"); // Create Table Row Element
    for (let j = 0; j < list[i].length; j++) {
      // Loop throught every column
      const col = document.createElement("td"); // Create Data Table
      col.textContent = list[i][j]; // Add array value to element
      row.appendChild(col); // Append element to the Row element
    }
    tableBody.appendChild(row); // Append element to the DOM
  }
}
// -------------------------------------------------------- Render Table Based on A Selector ------------------------------------------------------------
function render_A_Table() {
  tableBody.innerHTML = ""; // Remove current table
  // Loop throught the List and append only the lines that have the first element === to selected input value
  for (let i = 0; i < list.length; ++i) {
    const row = document.createElement("tr");
    if (selectInput_A.value === list[i][0]) {
      for (let j = 0; j < list[i].length; j++) {
        const col = document.createElement("td");
        col.textContent = list[i][j];
        row.appendChild(col);
      }
    }
    tableBody.appendChild(row);
  }
  // Set the select input value for B and C
  selectInput_B.value = findSelectInputValueFor_B(selectInput_A.value, 0);
  selectInput_C.value = findSelectInputValueFor_C(selectInput_A.value, 0);
  // If select input is "Toate" render entire table
  if (selectInput_A.value === "Toate") {
    selectInput_B.value = "Toate";
    selectInput_C.value = "Toate";
    renderTable();
  }
}
// -------------------------------------------------------- Render Table Based on B Selector ------------------------------------------------------------
function render_B_Table() {
  tableBody.innerHTML = ""; // Remove current table
  // Loop throught the List and append only the lines that have the first element === to selected input value
  for (let i = 0; i < list.length; i++) {
    const row = document.createElement("tr");
    if (selectInput_B.value === list[i][1]) {
      for (let j = 0; j < list[i].length; j++) {
        const col = document.createElement("td");
        col.textContent = list[i][j];
        row.appendChild(col);
      }
    }
    tableBody.appendChild(row);
  }

  // Set the select input value for A and C
  selectInput_A.value = findSelectInputValueFor_A(selectInput_B.value, 1);
  selectInput_C.value = findSelectInputValueFor_C(selectInput_B.value, 1);
  // If select input is "Toate" render entire table
  if (selectInput_B.value === "Toate") {
    selectInput_A.value = "Toate";
    selectInput_C.value = "Toate";
    renderTable();
  }
}
// -------------------------------------------------------- Render Table Based on C Selector ------------------------------------------------------------
function render_C_Table() {
  tableBody.innerHTML = ""; // Remove current table
  // Loop throught the List and append only the lines that have the first element === to selected input value

  for (let i = 0; i < list.length; i++) {
    const row = document.createElement("tr");
    if (selectInput_C.value === list[i][2]) {
      for (let j = 0; j < list[i].length; j++) {
        const col = document.createElement("td");
        col.textContent = list[i][j];
        row.appendChild(col);
      }
    }
    tableBody.appendChild(row);
  }
  // Set the select input value for A and B
  selectInput_A.value = findSelectInputValueFor_A(selectInput_C.value, 2);
  selectInput_B.value = findSelectInputValueFor_B(selectInput_C.value, 2);
  // If select input is "Toate" render entire table
  if (selectInput_C.value === "Toate") {
    selectInput_B.value = "Toate";
    selectInput_A.value = "Toate";
    renderTable();
  }
}
// -------------------------------------------------------- Set input value for A -----------------------------------------------------------------------
function findSelectInputValueFor_A(element, col) {
  let foundStartingValue = false;
  let startingValue;
  let endingValue;

  // Loop throught the List
  for (let i = 0; i < list.length; ++i) {
    if (element === list[i][col]) {
      // If element is === to current element
      for (let j = 0; j < list[i].length; ++j) {
        // Get A input value
        if (!foundStartingValue) {
          //If starting value was not found yet
          startingValue = list[i][0]; // Set starting value to current value
          endingValue = startingValue; // Set ending value to startign value
          foundStartingValue = true; // Set boolean to true
        } else {
          endingValue = list[i][0]; // Update ending value
        }
      }
    }
  }

  if (startingValue === endingValue) {
    // If starting value and ending value are the same return starting value for input
    return startingValue;
  } else {
    // else return 'Toate'
    return "Toate";
  }
}
// -------------------------------------------------------- Set input value for B -----------------------------------------------------------------------
function findSelectInputValueFor_B(element, col) {
  let foundStartingValue = false;
  let startingValue;
  let endingValue;

  // Loop throught the List
  for (let i = 0; i < list.length; ++i) {
    if (element === list[i][col]) {
      // If element is === to current element
      for (let j = 0; j < list[i].length; ++j) {
        // Get A input value
        if (!foundStartingValue) {
          //If starting value was not found yet
          startingValue = list[i][1]; // Set starting value to current value
          endingValue = startingValue; // Set ending value to startign value
          foundStartingValue = true; // Set boolean to true
        } else {
          endingValue = list[i][1]; // Update ending value
        }
      }
    }
  }

  if (startingValue === endingValue) {
    // If starting value and ending value are the same return starting value for input
    return startingValue;
  } else {
    return "Toate";
    // else return 'Toate'
  }
}
// -------------------------------------------------------- Set input value for C -----------------------------------------------------------------------
function findSelectInputValueFor_C(element, col) {
  let foundStartingValue = false;
  let startingValue;
  let endingValue;

  // Loop throught the List
  for (let i = 0; i < list.length; ++i) {
    if (element === list[i][col]) {
      // If element is === to current element
      for (let j = 0; j < list[i].length; ++j) {
        if (!foundStartingValue) {
          //If starting value was not found yet
          startingValue = list[i][2]; // Set starting value to current value
          endingValue = startingValue; // Set ending value to startign value
          foundStartingValue = true; // Set boolean to true
        } else {
          endingValue = list[i][2]; // Update ending value
        }
      }
    }
  }

  if (startingValue === endingValue) {
    // If starting value and ending value are the same return starting value for input
    return startingValue;
  } else {
    // else return 'Toate'
    return "Toate";
  }
}

renderTable();

selectInput_A.addEventListener("change", render_A_Table);
selectInput_B.addEventListener("change", render_B_Table);
selectInput_C.addEventListener("change", render_C_Table);
