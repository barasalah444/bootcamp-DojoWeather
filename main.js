
function loadingAlert(cityName) {
    alert("Loading weather report...");
}


function dismissCookie() {
    const cookieBar = document.getElementById("cookieBar");
    cookieBar.remove(); // أو cookieBar.style.display = "none";
}


function convertTemperature(element) {
    const unit = element.value;
    
    
    const highTemps = document.querySelectorAll('.high');
    const lowTemps = document.querySelectorAll('.low');
    
    
    
    function cToF(celsius) {
        return Math.round((celsius * 9 / 5) + 32);
    }

    
    highTemps.forEach(span => {
        const cVal = parseInt(span.getAttribute('data-c'));
        if (unit === 'F') {
            span.innerText = cToF(cVal) + "°";
        } else {
            span.innerText = cVal + "°";
        }
    });

    
    lowTemps.forEach(span => {
        const cVal = parseInt(span.getAttribute('data-c'));
        if (unit === 'F') {
            span.innerText = cToF(cVal) + "°";
        } else {
            span.innerText = cVal + "°";
        }
    });
}