const clock = document.querySelector("h2#clock");

function getclock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes= String(date.getMinutes()).padStart(2, "0");
    const seconds= String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getclock();
setInterval(getclock,1000);

//setInterval(sayHello, 5000); // 5초마다 실행
//setTimeout(sayHello, 5000);  5초 후 한 번만 실행