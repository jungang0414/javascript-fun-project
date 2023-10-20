/*
1.選中indicator, image元素
2.在每個indicator上掛上監聽器
3.使每個indicator根據index對應到一張圖片，加入點擊事件。
*/

const indicators = document.querySelectorAll(".indicator");
const images = document.querySelectorAll("img");
const gallery = document.querySelector(".gallery");


//建立observer 觀察元素是否進入畫面的監聽器
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const targetIndex = entry.target.dataset.index;
            if ( entry.isIntersecting) {
                indicators[targetIndex].classList.add("active");
            } else {
                indicators[targetIndex].classList.remove("active");
            }
        });
    },
    {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.5,
    }
);

indicators.forEach((element, index) => {
    element.addEventListener("click", () => {
        images[index].scrollIntoView({
            block: "center", //這裡決定要以元素的哪個部份滑進畫面
            behavior: "smooth", // 決定滑動時的行為
        });
    });
});

//

//利用observer監聽所有image元素
images.forEach((element) => {
    observer.observe(element);
});
