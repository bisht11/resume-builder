// grabbing the form(by class) with the help of js
const inputFields = document.querySelector(".input-fields");
const output = document.querySelector(".output");

// CKEditor initialization + saving data

async function TextEditor(element) {
  const newEditor = await ClassicEditor.create(element, {
    toolbar: [
      "heading",
      "bold",
      "italic",
      "bulletedList",
      "numberedList",
      "blockQuote",
    ],
  });
  return newEditor;
}

let workExpdetails;
TextEditor(inputFields["workexp"]).then((nEditor) => {
  workExpdetails = nEditor;
});

let Academic;
TextEditor(inputFields["academics"]).then((nEditor) => {
  Academic = nEditor;
});

// declare a variable
let formShow = true;

// interactivity with the help of js (changing the css of DOM using js)
function toggle() {
  // when formShow is true
  if (formShow) {
    // hide the form and inputs using display = 'none'
    inputFields.style.display = "none";
    // set the variable value set to false
    formShow = false;
    // fetching the form data into our output
    output.innerHTML = `
      <div class="hero">
        <h1>${inputFields["name"].value}</h1>
        <h2>${inputFields["title"].value}</h2>
      </div>
      <div class="main">
        <div>
          <h2>OBJECTIVE</h2>
          <p>${inputFields["objective"].value}</p>
          <h2>SKILLS</h2>
          <p>${inputFields["skills"].value}</p>
          <h2>ACHIEVEMENTS</h2>
          <p>${inputFields["achievements"].value}</p>
          <h2>CONTACT</h2>
          <p>${inputFields["contact"].value}</p>
        </div>
        <div>
        <h2>WORK EXPERIENCE</h2>
        ${workExpdetails.getData()}
        <h2>ACADEMIC DETAILS</h2>
        ${Academic.getData()}
        <h2>PROJECTS</h2>
        <p>${inputFields["projects"].value}</p>
        </div>
        <div class="btn">
        <button id="previewBtn" onclick="print()">Print Resume</button>
        </div>
      </div>
    `;
  } else {
    inputFields.style.display = "block";
    formShow = true;
    // toggle to hide the output content
    output.innerHTML = "";
  }
}
