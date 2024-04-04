document.addEventListener("DOMContentLoaded", function () {

    const tipForm = document.getElementById("tipForm");
    const billTotalInput = document.getElementById("billTotal"); // Updated variable name
    const tipPercentageInput = document.getElementById("tipPercentage"); // Updated variable name
    const tipSlider = document.getElementById("tipSlider");
    const tipAmount = document.getElementById("tipAmount");
    const totalWithTip = document.getElementById("totalWithTip");

    // **Tip Form Functionality:**

    billTotalInput.addEventListener("input", function () {
        const billValue = billTotalInput.value.trim();
        if (!/^\d*\.?\d*$/.test(billValue)) {
            alert("Please enter a valid number for the Bill Total.");
            billTotalInput.value = "";
            tipPercentageInput.value = "";
            tipAmount.value = "";
            totalWithTip.value = "";
            return;
        }
    });

    tipForm.addEventListener("input", function () {
        const bill = parseFloat(billTotalInput.value);
        const percentage = tipSlider.value;
        if (isNaN(bill)) {
            alert("Please enter a valid number for the Bill Total.");
            billTotalInput.value = "";
            tipPercentageInput.value = "";
            tipAmount.value = "";
            totalWithTip.value = "";
            return;
        }

        const tip = (bill * percentage) / 100;
        const total = bill + tip;

        tipPercentageInput.value = percentage + "%";
        tipAmount.value = tip.toFixed(2);
        totalWithTip.value = total.toFixed(2);
    });
    

    // **Background Gradient Functionality:**

    const container = document.getElementById('colorChangeContainer');

    function changeStyle() {
        // Define an array of possible light color combinations
        const lightColors = [
          ["#ffeadb", "#fcb071"], // Light pink to light orange
          ["#f0fff0", "#d2fefe"], // Light blue to light blue-green
          ["#fff9c4", "#c2e0f0"], // Light yellow to light blue
          ["#e0f7fa", "#d6ffc2"] // Light blue to very light green
        ];

        // Pick a random color combination from the array
        const randomGradient = lightColors[Math.floor(Math.random() * lightColors.length)];

        // Generate the linear gradient string based on direction and colors
        const randomDirection = Math.floor(Math.random() * 4); // 0-3 for different directions
        let gradientString = "";
        switch (randomDirection) {
          case 0:
            gradientString = `linear-gradient(to right, ${randomGradient[0]}, ${randomGradient[1]})`;
            break;
          case 1:
            gradientString = `linear-gradient(to left, ${randomGradient[0]}, ${randomGradient[1]})`;
            break;
          case 2:
            gradientString = `linear-gradient(to top, ${randomGradient[0]}, ${randomGradient[1]})`;
            break;
          case 3:
            gradientString = `linear-gradient(to bottom, ${randomGradient[0]}, ${randomGradient[1]})`;
            break;
        }

        // Apply the random gradient to the container
        container.style.background = gradientString;
    }

    // Change style every 4 seconds (4000 milliseconds)
    setInterval(changeStyle, 4000);

    // New function added
    function updatetipForm() {
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = parseFloat(tipSlider.value);

        if (isNaN(billTotal)) {
            alert("Please enter a valid number for the Bill Total.");
            return;
        }
    }
});
