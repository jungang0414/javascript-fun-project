const exportBtn = document.querySelector(".export-btn");

const tableData = [
    ["ID", "Name", "Gender"],
    ["1", "Danny", "Male"],
    ["2", "Mike", "Male"],
    ["3", "Cindy", "Female"],
];

const exportToCsv = () => {
    let csvString = "";
    tableData.forEach((rowItem) => {
        rowItem.forEach((colItem) => {
            csvString += colItem + ",";
        });
        csvString += "\r\n";
    });

    //加入前綴使得瀏覽器了解此檔案類型與內容
    csvString = "data:application/csv," + encodeURIComponent(csvString); //加入encodeURIComponent使正確編譯(當有特殊文字可以正常編譯)
    let anchor = document.createElement("a");
    anchor.setAttribute("href", csvString);
    //第一個屬性加入download屬性，觸發download行為，第二個參數則是設定檔案名稱以及副檔名
    anchor.setAttribute("download", "demo.csv");
    document.body.appendChild(anchor);
    anchor.click();
};

exportBtn.addEventListener("click", () => {
    exportToCsv();
});