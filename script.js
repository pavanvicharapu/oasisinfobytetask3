document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const convertButton = document.getElementById("convert");
    const resultContainer = document.getElementById("result");
    const convertedTemperature = document.getElementById("converted-temperature");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (isNaN(temperature)) {
            alert("Please enter a valid number for temperature.");
            return;
        }

        let result;
        if (unit === "celsius") {
            // Convert to Celsius logic
            result = temperature;
        } else if (unit === "fahrenheit") {
            // Convert to Fahrenheit logic
            result = (temperature * 9/5) + 32;
        } else if (unit === "kelvin") {
            // Convert to Kelvin logic
            result = temperature + 273.15;
        }

        resultContainer.classList.remove("hidden");
        convertedTemperature.textContent = result.toFixed(2) + " " + unit;
    });
});
