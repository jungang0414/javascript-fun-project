const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    page.setViewport({
        width: 1200,
        height: 800,
    });

    await page.goto("https://shopee.tw/buyer/login?next=https%3A%2F%2Fshopee.tw%2F");

    await page.type('input[name="loginKey"]', "Puppeteer");

    await page.type('input[name="password"]', "puppeteer");
})();

