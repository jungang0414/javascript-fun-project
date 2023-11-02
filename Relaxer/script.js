//宣告變數
const container = document.getElementById("container");
const text = document.getElementById("text");

//總長時間
const totalTime = 7500;
const holdTime = totalTime / 5;
const breatheTime = holdTime * 2;

async function breatheAnimation() {
    text.innerText = "Breathe in!";
    container.className = "container grow";
    
    await new Promise((resolve) => setTimeout(resolve, breatheTime));
    text.innerText = "Hold it!";

    await new Promise((resolve) => setTimeout(resolve, holdTime));
    text.innerText = "Breathe out!";
    container.className = "container shrink"
}

breatheAnimation();
setInterval(breatheAnimation, totalTime);