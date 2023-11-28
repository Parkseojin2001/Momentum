const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.classList.toggle("clicked"); // toggle : 있다면 제거 없으면 추가
}



h1.addEventListener("click", handleTitleClick);