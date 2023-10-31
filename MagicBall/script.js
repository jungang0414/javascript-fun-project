const shakeBtn = document.getElementById("shake");
const result = document.querySelector(".result");

//隨機文字

const possibleAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
];

//選取隨機文字
//Math函數
function getRandomAnswer() {
    return possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
}

//新增抖動動畫

const ballImage = document.querySelector(".ball-image");

function handleBtnClick() {
    //加入shake css元素
    ballImage.classList.add("shake")
    //當點擊一次後限制點擊按鈕
    shakeBtn.disabled = true;
    //延遲1s後執行以下程式碼
    setTimeout(() => {
        //移除shake css元素 並顯示回答文字
        ballImage.classList.remove("shake");
        result.textContent = getRandomAnswer();
        //當回答出現後 解除點擊限制
        shakeBtn.disabled = false;
    }, 1000);
}

//監聽事件 點擊shake後觸發 handleBtnClick()
shakeBtn.addEventListener("click", handleBtnClick);