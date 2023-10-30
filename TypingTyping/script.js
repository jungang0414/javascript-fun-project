//監聽事件
const wordEl = document.getElementById("word");
const inputEl = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

//監聽設定事件
const settingBtn = document.getElementById("setting-btn");
const setting = document.getElementById("setting");
const difficultySelect = document.getElementById("difficulty");

//隨機產生文字
const words = [
    "sigh",
    "tense",
    "airplane",
    "ball",
    "pies",
    "juice",
    "warlike",
    "bad",
    "north",
    "dependent",
    "steer",
    "silver",
    "highfalutin",
    "superficial",
    "quince",
    "eight",
    "feeble",
    "admit",
    "drag",
    "loving",
];

//初始文字
let randomWord;

//設定初始分數、時間
let score = 0;
let time = 10;

const timeInterval = setInterval(updateTime, 1000);

//新增一開始的文字
addWord();

//取得隨機文字
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

//新增文字
function addWord() {
    randomWord = getRandomWord();
    wordEl.innerHTML = randomWord;
}

//更新分數
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

//更新時間
function updateTime() {
    time--;
    timeEl.innerHTML = time + "s";
    if (time === 0) {
        clearInterval(timeInterval);
        //end
        gameOver();
    }
}

// 結算
function gameOver() {
    endgameEl.classList.add("show");
    finalScoreEl.textContent = score;
}

inputEl.addEventListener("input", (e) => {
    const insertText = e.target.value;
    if (insertText === randomWord) {
        addWord();
        updateScore();
        //根據難度改變時間
        switch (difficulty) {
            case "easy":
                time += 5;
                break;
            case "medium":
                time += 3;
                break;
            case "hard":
                time += 1;
                break;
        }
        updateTime();
        e.target.value = "";
    }
});

//重設
restartBtn.addEventListener("click", () => window.location.reload());

//setting 按鈕
settingBtn.addEventListener("click", () => {
    setting.classList.toggle("hide");
});

//儲存使用者所選

let difficulty = localStorage.getItem("difficulty") == null ? "medium" : localStorage.getItem("difficulty");

//設定難度的元素
difficultySelect.value = difficulty;

//讓使用者不用再點擊輸入框 ,開始直接指向輸入的位置。
inputEl.focus();