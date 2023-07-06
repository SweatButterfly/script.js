// Function to generate a random number between 0 and 9
    function getRandomNumber() {
      return Math.floor(Math.random() * 10);
    }

    // Function to update the slot machine display
    function updateDisplay(slot1Value, slot2Value, slot3Value) {
      document.getElementById("slot1").textContent = slot1Value;
      document.getElementById("slot2").textContent = slot2Value;
      document.getElementById("slot3").textContent = slot3Value;
    }

    // Function to spin the slot machine
    function spin() {
      var slot1Value = getRandomNumber();
      var slot2Value = getRandomNumber();
      var slot3Value = getRandomNumber();
    }
