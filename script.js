function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    var seconds = time % 60;
    var minutes = Math.floor((time / 60) % 60);
    var hours = Math.floor(time / 3600);

    var secondsDegrees = (seconds / 60) * 360;
    var minutesDegrees = ((minutes * 60 + seconds) / 3600) * 360;
    var hoursDegrees = ((hours % 12) / 12) * 360 + ((minutes / 60) * 360 / 12);

    console.log(time);

    var secondsElement = document.getElementById('seconds');
    var minutesElement = document.getElementById('minutes');
    var hourElement = document.getElementById('hour');

    secondsElement.style.transform = 'rotate(' + secondsDegrees + 'deg)';
    minutesElement.style.transform = 'rotate(' + minutesDegrees + 'deg)';
    hourElement.style.transform = 'rotate(' + hoursDegrees + 'deg)';
    console.log('Hora:', hours, 'Minuto:', minutes, 'Segundo:', seconds);

}, 1000);
