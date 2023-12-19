//選取需要的DOM元素
const cardsContainer = document.getElementById("cards-container");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const addContainer = document.getElementById("add-container");

//選取刪除按鈕元素
const clearBtn = document.getElementById("clear");
//選取prev&next按鈕元素
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");

// 追蹤目前顯示卡片的index的變數 初始值為0
let currentActiveCard = 0;

// set up dummy data for project first look
const dummyData = [
    { question: "What's Javascript?", answer: "A programming language" },
    { question: "What's Vue.js?", answer: "A popular Front-end framework" },
    {
        question: "What are primitive values in Javascript?",
        answer:
            "There are 7 types. Boolean, Null, Undefined, String ,Number, BigInt and Symbol",
    },
];

localStorage.setItem("cards", JSON.stringify(dummyData));

//localStorage取出資料
const cardsData = getCardData();

// 從localStorage渲染所有卡片
function createCards() {
    cardsData.forEach((item, index) => {
        createCard(item, index);
    });
}

//儲存所有卡片元素的變數
const cardsEl = [];

// 建立卡片元素
function createCard(data, index) {
    const card = document.createElement("div");
    card.classList.add("card");

    if (index === 0) {
        card.classList.add("active");
    }

    card.innerHTML = `
    <div class="inner-card">
        <div class="inner-card-front">
            <p>${data.question}</p>
        </div>
        <div class="inner-card-back">
        <p>${data.answer}</p>
        </div>
    </div>
    `;

    card.addEventListener("click", () => {
        card.classList.toggle("toggle-answer");
    });

    card.addEventListener("click", () => {
        card.classList.toggle("show-answer");
    });

    //建立卡片時將元素推進cardEl陣列
    cardsEl.push(card)
    cardsContainer.appendChild(card);

    updateCurrentText();
}

//更新卡片次序文字的函數
function updateCurrentText() {
    currentEl.innerHTML = `${currentActiveCard + 1}/${cardsEl.length}`;
}

//取得localStotage的函數，當資料不存在localStorage則為空陣列。
function getCardData() {
    const cards = JSON.parse(localStorage.getItem("cards"));
    return cards === null ? [] : cards;
}

//將資料存進localStorage
function setCardsData(cards) {
    localStorage.setItem("cards", JSON.stringify(cards));
    window.location.reload();
}

//監聽新增卡片按鈕，點擊後顯示新增表單
showBtn.addEventListener("click", () => {
    //添加css
    addContainer.classList.add("show");
});

//監聽表單內新增卡片按鈕，點擊後將新增的卡片內容加入localStorage
addCardBtn.addEventListener("click", () => {
    //取得兩個輸入框的值
    const question = questionEl.value;
    const answer = answerEl.value;

    //當兩者的值不為空，則可以新增卡片
    if (answer.trim() && question.trim()) {
        const newCard = { question, answer };
        cardsData.push(newCard);

        //清空當前輸入值
        questionEl.value = "";
        answerEl.value = "";

        //關閉輸入表單
        addContainer.classList.remove("show");

        //更新localStorage值
        setCardsData(cardsData);
    }
});

//監聽切換按鈕
nextBtn.addEventListener("click", () => {
    cardsEl[currentActiveCard].className = "card left";
    currentActiveCard++;

    if (currentActiveCard > cardsEl.length - 1) {
        currentActiveCard = cardsEl.length - 1;
    }
    cardsEl[currentActiveCard].className = "card active";
    updateCurrentText();
});

prevBtn.addEventListener("click", () => {
    cardsEl[currentActiveCard].className = "card";
    currentActiveCard--;

    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }
    cardsEl[currentActiveCard].className = "card active";
    updateCurrentText();
});

//監聽刪除按鈕
clearBtn.addEventListener("click", () => {
    //清除localStorage
    localStorage.clear();

    //重整畫面
    window.location.reload();
})

//當js載入時渲染所有卡片
createCards();

