const button = document.querySelector(".btn");
const timeRangeSelect = document.querySelector("#timeRange");

const deleteHistory = (timeRange) => {
    //delete all 優先處裡
    if (timeRange === "all") return chrome.history.deleteAll();

    // deleteRange函數 需傳入含有endTime, startTime的物件
    // 時間需以毫秒計算
    return chrome.history.deleteRange({
        endTime: Date.now(),
        startTime: Date.now() - Number(timeRange) * 60 * 60 * 1000,
    });
};

button.addEventListener('click', () => {
    deleteHistory(timeRangeSelect.value);
    window.close();
});