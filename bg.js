const body = document.querySelector("body");


const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `/img/${imgNumber + 1}.jpg`;
    // css에 쓸 클래스이름  추가.
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom() {

    // Math.random() * 숫자 하면 해당 숫자까지 랜덤으로 숫자나옴.
    // 단 소수점 문제가 있음
    // floor는 값을 해결하려면 Math.floor 사용 
    // 아래의 경우 0,1,2가 나옴
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();