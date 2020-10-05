setInterval(function() {
    var hex = '#' + new Date().toLocaleTimeString().replace(/:/g, '');
    document.getElementById('clock').innerHTML = hex;
    document.body.style.backgroundColor = hex;
}, 500)
