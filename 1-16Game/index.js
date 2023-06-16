let table = document.getElementById("table");
let timeout = document.getElementById("timeout");

let arr = [];
let newArr = [];
let count;
let timeCount;
let myInterval;

function startGame() {
  clearInterval(myInterval);
  count = 1;
  timeCount = 15;
  myInterval = setInterval(function () {
    if (timeCount > -1) {
      timeout.innerHTML = `${timeCount--}`;
    } else {
      newArr = [];
      alert("Timeout. Try again.");
      clearInterval(myInterval);
      setTimeout(function () {
        table.innerHTML = "";
        timeout.innerHTML = "";
      }, 2000);
    }
  }, 1000);
  for (let i = 0; i < 16; i++) {
    arr[i] = i + 1;
  }
  newArr = [];
  var newHTML = "";
  for (let i = 0; i < 4; i++) {
    newHTML += "<tr>";
    for (let k = 0; k < 4; k++) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      let randomNumber = arr[randomIndex];
      newArr.push(randomNumber);
      newHTML += `<td id="${randomNumber}" class="numberHover" onclick="Playing(${randomNumber})" style="width: 50px; height: 50px; border: 2px black solid; cursor: pointer">${randomNumber}</td>`;
      arr.splice(randomIndex, 1);
    }
    newHTML += "</tr>";
  }
  table.innerHTML = newHTML;
  console.log(arr);
  console.log(newArr);
}

function Playing(numberSelect) {
  if (timeCount > -1) {
    if (numberSelect == count) {
      if (count == 16) {
        clearInterval(myInterval);
        alert("Success. Good Job!!!");
        setTimeout(function () {
          table.innerHTML = "";
          timeout.innerHTML = "";
        }, 2000);
      } else {
        count++;
        document
          .getElementById(`${numberSelect}`)
          .classList.remove("numberHover");
        document
          .getElementById(`${numberSelect}`)
          .classList.add("successBackground");
        console.log(newArr);
      }
    } else {
      newArr = [];
      document
        .getElementById(`${numberSelect}`)
        .classList.remove("numberHover");
      document
        .getElementById(`${numberSelect}`)
        .classList.add("errorBackground");
      clearInterval(myInterval);
      alert("Wrong. Try again.");
      setTimeout(function () {
        table.innerHTML = "";
        timeout.innerHTML = "";
      }, 2000);
    }
  } else {
    newArr = [];
    alert("Timeout. Try again.");
    clearInterval(myInterval);
    setTimeout(function () {
      table.innerHTML = "";
      timeout.innerHTML = "";
    }, 2000);
  }
}
