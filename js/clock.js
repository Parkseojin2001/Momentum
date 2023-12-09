const clock = document.querySelector("h2#clock");

function getclock(){
    clock.innerText = clock.innerText = new Date().toLocaleTimeString("en-US");
    }


getclock();
setInterval(getclock,1000);

//setInterval(sayHello, 5000); // 5초마다 실행
//setTimeout(sayHello, 5000);  5초 후 한 번만 실행