document.addEventListener("DOMContentLoaded", function () {
  console.log("Page Loaded.");

  // Get references to HTML elements
  const customNumberInput = document.getElementById("customNumberInput");
  const studentInfo = document.getElementById("studentInfo");
  const changeCustomColorBtn = document.querySelector(".changeCustomColor");
  const changeRandomColorBtn = document.querySelector(".changeRandomColor");
  const imageSelection = document.getElementById("imageSelection");
  const imageDisplay = document.getElementById("imageDisplay");

  // Function to change background color and display student information
  function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);
    studentInfo.textContent = "200534092: " + userInput;

    let bgColor;

    if (userInput < 0 || userInput > 100) {
      bgColor = "red";
    } else if (userInput >= 0 && userInput <= 20) {
      bgColor = "green";
    } else if (userInput > 20 && userInput <= 40) {
      bgColor = "blue";
    } else if (userInput > 40 && userInput <= 60) {
      bgColor = "orange";
    } else if (userInput > 60 && userInput <= 80) {
      bgColor = "purple";
    } else if (userInput > 80 && userInput <= 100) {
      bgColor = "yellow";
    }

    document.body.style.backgroundColor = bgColor;
  }

  // Function to change background color with a random number
  function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNum;
    changeCustomColor();
  }

  // Function to populate image selection dropdown
  function populateImageSelection() {
    const imageOptions = [
      "img1.jpg",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg",
      "img5.jpg",
    ];

    imageOptions.forEach(function (imageOption) {
      const option = document.createElement("option");
      option.value = imageOption;
      option.textContent = imageOption;
      imageSelection.appendChild(option);
    });
  }

  // Function to change the displayed image
  function changeImage() {
    const selectedImage = imageSelection.value;
    imageDisplay.src = "./img/" + selectedImage;
    imageDisplay.alt = selectedImage;
  }

  // Event listeners
  changeCustomColorBtn.addEventListener("click", changeCustomColor);
  changeRandomColorBtn.addEventListener("click", changeRandomColor);
  imageSelection.addEventListener("change", changeImage);

  // Populate image selection dropdown
  populateImageSelection();
});
