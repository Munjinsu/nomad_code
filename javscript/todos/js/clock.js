const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();   
    const hours = String(date.getHours()).padStart(2,"0");   // 숫자 > 문자  String()  //  자리수 2개로 만들고 빈자리는 "0"으로 채워줘 || 문자.padStart(2, "0")  ||
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}` // 백틱 
}

getClock();   // 처음 시작하자마자 실행
setInterval(getClock, 1000);  //1초마다 실행