const clockContainer = document.querySelector(".js-clock"),
    clockTitle = document.querySelector(".js-time");

function getTime() {
    const date = new Date();
    const min = date.getMinutes();
    const second = date.getSeconds();
    const hour = date.getHours();
    clockTitle.innerText = `${hour}:${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`;
}  

function init() {
    getTime();
    setInterval(() => {
        getTime();
    }, 1000);
}


init();
