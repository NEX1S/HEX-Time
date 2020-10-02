setInterval(function() {
    //var hex = '#' + new Date().toISOString().substr(11, 8).replace(/:/g, '');
    
    var hex = '#' + (currentdate.getHours() + currentdate.getMinutes() + currentdate.getSeconds()).toISOString().substr(11, 8).replace(/:/g, '');

    
    document.getElementById('clock').innerHTML = hex;
    document.body.style.backgroundColor = hex;
}, 500)
