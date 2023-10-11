// 定期透過瀏覽器發送通知

//建立監聽alarm事件的監聽器
//若有alarm產生，則發送通知
//定期發送通知

// periodInMinutes 每n分鐘發送alarm
// delayInMinutes  延遲n分鐘後發送alarm
// when 在指定時間發送alram (毫秒為單位)
chrome.alarms.create({ periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener(() => {
    chrome.notifications.create({
        type: "basic",
        iconUrl: "./32x32.png",
        message: "Drink water",
        title: "Water Time!"
    });
});


