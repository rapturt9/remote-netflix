const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || 5000;

var browser, page;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var power = false;

app.post('/api', async (req, res) => {
  console.log(req.body);
  let type = req.body.body;
  if(type == '16753245' && !power){
    power = true;
    browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://www.netflix.com/browse");
    await page.waitForNavigation({
      waitUntil: 'networkidle0',
    });
    await document.querySelectorAll('#id_userLoginId').click()
    await page.keyboard.type("username",{delay: 100});
    await page[i].keyboard.press('Tab');
    await page.keyboard.type("password",{delay: 100});
    await document.querySelectorAll('.login-button')[0].click()
  } else if (type == '16753245' && power){
    power = false;
    await browser.close();
  }
  if(type == '16489542'){
    await document.querySelectorAll('.profile')[0].click();
  }
  if(type == '16489122'){
    await document.querySelectorAll('.playButton')[0].click();
  }
  res.send("got data");
});



app.listen(port, () => console.log(`Listening on port ${port}`));