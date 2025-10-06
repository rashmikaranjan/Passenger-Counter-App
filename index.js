// 1. intialize the count as 0
let count = 0;

let countEl = document.getElementById("count-el"); // asking for the html element - 4

let saveEl = document.getElementById("save-el"); // 6

// 2. listen for clicks on the increment button --- event listener (onclick) added to html - function defined in js

// 3. increment the count variable when the button is clicked

// 4. change the count-el in the HTML to reflect the new count

function increment() {
  console.log("Button clicked"); // 2
  count += 1; // 3
  countEl.textContent = count; //4
}

// 5. Create a function, save(), which logs out the count when it's called

// 6. Grab the save-el paragrah and store it in a variable called saveEl

// 7. Create a variable that contains both the count and the dash separator, i.e. "12 - "

// 8. Render the variable in the saveEl using innerText

// NB: Make sure to not delete the existing content of the paragraph

function save() {
  console.log(count);
  let prevEntry = count + " - ";
  saveEl.textContent += prevEntry;
  count = 0;
  countEl.textContent = 0;
}
