const wrap = document.querySelector(".wrap");
const circle = document.querySelector(".circle");
const center = document.querySelector(".center");
const eat1 = document.querySelector(".eat-1");
const eat2 = document.querySelector(".eat-2");
const eat3 = document.querySelector(".eat-3");
const eat4 = document.querySelector(".eat-4");
const eat5 = document.querySelector(".eat-5");
const eat6 = document.querySelector(".eat-6");
const eat = document.querySelectorAll(".eat");
const input = document.querySelector('.in');
const button = document.querySelector('button');
// 餐廳
let ar = ["", "", "", "", "", ""];
console.log(ar);

let value;
const inputValue = (e) => {
    value = e.target.value;
    
};

input.addEventListener('input', inputValue);
button.addEventListener('click', () => {
    ar.shift();
    ar.push(value);
    eat1.innerHTML = ar[0];
    eat2.innerHTML = ar[1];
    eat3.innerHTML = ar[2];
    eat4.innerHTML = ar[3];
    eat5.innerHTML = ar[4];
    eat6.innerHTML = ar[5];
    input.value = '';
});

// 生成格線
for (i = 0; i <= 6; i++) {
    let wraps = document.createElement("div");
    wraps.className = "item";
    wraps.style.transform = `rotate(${i * 60}deg)`;
    circle.appendChild(wraps);
}

// 指針旋轉
function timeout() {
    return new Promise(function (resolve) {
        setTimeout(resolve, 0);
    });
}

async function rotate() {
    let rotateNum = 720 + Math.floor(Math.random() * 360);
    for (let i = 0; i < rotateNum; i++) {
        i < (rotateNum * 0.7)
            ? (center.style.transform = `rotate(${i * 10}deg)`)
            : (center.style.transform = `rotate(${i}deg)`);
        await timeout();
    }
}

start = () => {
    rotate();
};
