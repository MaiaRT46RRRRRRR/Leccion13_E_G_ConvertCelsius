function convertidorAF() {
    
    var c = document.getElementById("celcius").value * 9 / 5 + 32;
    document.getElementById("fahrenheit").value = c.toFixed(2);
}

function convertidorAC() {
        f = (document.getElementById("fahrenheit").value -32) * 5 / 9;
        document.getElementById("celcius").value = f.toFixed(2);
}

