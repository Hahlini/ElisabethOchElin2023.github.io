var countDownDate = new Date("Aug 19, 2023 00:00:00").getTime();

var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("timeleft").innerHTML = "Bröllop om: "+days + " dagar " + hours + " timmar " + minutes + " minuter och " + seconds + "sekunder."

    }, 10)

myfunc()