function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var convertedTemperature;

    // Validate input as a number
    if (isNaN(temperatureInput)) {
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
        return;
    }

    temperatureInput = parseFloat(temperatureInput);

    // Perform conversions
    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedTemperature = (temperatureInput * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            convertedTemperature = temperatureInput + 273.15;
        } else {
            convertedTemperature = temperatureInput;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedTemperature = (temperatureInput - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            convertedTemperature = (temperatureInput + 459.67) * 5/9;
        } else {
            convertedTemperature = temperatureInput;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedTemperature = temperatureInput - 273.15;
        } else if (toUnit === "fahrenheit") {
            convertedTemperature = (temperatureInput * 9/5) - 459.67;
        } else {
            convertedTemperature = temperatureInput;
        }
    }

    // Display result
    document.getElementById("result").innerHTML = temperatureInput + " " + fromUnit + " is " + convertedTemperature.toFixed(2) + " " + toUnit;
}
