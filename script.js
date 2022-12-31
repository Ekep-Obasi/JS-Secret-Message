const messageElement = document.getElementById("message");
const errorDisplay = document.querySelector(".errorDiv");
const normDisplay = document.querySelector(".normalText");
const cipherMsg = document.querySelector(".stack");
const submitElement = document.getElementById("formSubmit");

function normaliseString() {}

submitElement.addEventListener("submit", (event) => {
  event.preventDefault();
  if (messageElement.value === "") {
    errorDisplay.innerHTML = "You must enter a message first :(";
  } else if (messageElement.value.length < 50) {
    errorDisplay.innerHTML = "Enter atleast 50 characters!";
  } else {
    let regExp = new RegExp();
    regExp = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;

    const unPunctuatedString = messageElement.value
      .replace(regExp, "")
      .replace(/\s{2,}/g, " ")
      .toLowerCase();
    let normaliseString = unPunctuatedString
      .split(" ")
      .filter((e) => e.trim())
      .join("");

    normDisplay.innerHTML = normaliseString;

    // size

    const size = Math.ceil(Math.sqrt(normaliseString.length));

    console.log(size);
    let brokenString = [];
    let start = 0;
    let end = size;
    for (let i = 0; i < normaliseString.length; i++) {
      brokenString.push(normaliseString.slice(start, end));
      console.log(brokenString);
      cipherMsg.innerHTML += "<br>" + normaliseString.slice(start, end);
      start += size;
      end += size;
    }
    let cipherStr;
    let cipherText = [];
    for (j = 0; j < brokenString.length; j++) {
      for (let k = 0; k < brokenString[j].length; k++) {
        cipherStr = brokenString[k];
      }
      cipherText.push(cipherStr[j]);
    }
    console.log(cipherText);
  }
});

// let columns = []; //Initialize columns
//     let segment; // Variable To Hold Segments Being Broken And Injected Into Columns
//     let letter; // Keeps track of the current Letter being processed
//     let counter1; //Outer For Loop Counter
//     let counter2; //Inner For Loop Counter

//     // Create a countainer to hold segments
//     for (counter1 = 0; counter1 < this.size(); counter1 += 1) columns.push([]);

//     //Loop through the message segments
//     for (counter1 = 0; counter1 < messageSegments.length; counter1 += 1) {
//       segment = messageSegments[counter1]; //Assign segments at this position to the variable segment

//       //Loop through the segment previously assigned and pick individual character
//       for (counter2 = 0; counter2 < segment.length; counter2++) {
//         letter = segment[counter2];
//         columns[counter2].push(letter);
//       }
//     }

//     for (let counter1 = 0; counter1 < columns.length; counter1++)
//       this.displayChunks(secretifiedTextList, columns[counter1].join(""));
//   };

//   //Function To Render Chunks
//   displayChunks = (list, text) => {
//     let listItem = document.createElement("li");
//     let textNode = document.createTextNode(text);
//     listItem.appendChild(textNode);
//     list.appendChild(listItem);
//   };

//   secretify = () => {
//     if (this.validateInput()) {
//       this.normalizeText();
//       this.encodeText();
//     }
//   };
