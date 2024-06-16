
        function convertToFahrenheit() {
            var fahrenheit = document.getElementById('fahrenheitInput').value;
            var celsius = (fahrenheit - 32) * 5/9;
            document.getElementById('result').innerText = "Temperature in Celsius: " + celsius.toFixed(2);
        }
