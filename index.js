'use strict';

const line = require('@line/bot-sdk');
const express = require('express');

const defaultAccessToken = 'dhctiPZmYo7ELo020Wtnt6g3lG9vFiwTnMXsuYX8mtjCO+/9+a3GUpL1HuQ8pNl4ivqJFgSVRLE2qn1sxdLtLUXTpmWMZHh/N/OQPvV5KA7dJRjl6CCwM6VyzaT6LVaVP5JpmZ2MmAT4fhwbfHugCQdB04t89/1O/w1cDnyilFU=';
const defaultSecret =   'bf9b2691d4c779bf53352a59910ad313'
const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const request = require("request-promise");
const config = {
  channelAccessToken: defaultAccessToken,
  channelSecret:  defaultSecret,
};

const LINE_HEADER = {
  'Content-Type': 'application/json',
   Authorization: `Bearer <dhctiPZmYo7ELo020Wtnt6g3lG9vFiwTnMXsuYX8mtjCO+/9+a3GUpL1HuQ8pNl4ivqJFgSVRLE2qn1sxdLtLUXTpmWMZHh/N/OQPvV5KA7dJRjl6CCwM6VyzaT6LVaVP5JpmZ2MmAT4fhwbfHugCQdB04t89/1O/w1cDnyilFU=>`
};

const client = new line.Client(config);


const app = express();

app.get('/', (req, res) => {
  res.send('Success');
});

app.post('/webhook', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result));

    
});

function handleEvent(event) {


 if (event.type === 'follow') {

   client.replyMessage(event.replyToken,follow);
    
  } 
if (event.message.type === 'image') {//กรณ๊อื่น ที่เป็น image ส่วนมากจะเป็น พวก แจ้งฝาก
return client.replyMessage(event.replyToken, wait);
    }
 
   if (event.message.type !== 'text') //กรณ๊อื่น ที่ส่งมาไม่ได้เป็น text เช่น sticker image audio location
   {
return client.replyMessage(event.replyToken, item);
    }

if (event.message.text.indexOf("บริจาคเลือด") !== -1||event.message.text.indexOf("บริจาคเสื้อผ้า") !== -1||event.message.text.indexOf("บริจาคสิ่งของ") !== -1)
{

   return client.replyMessage(event.replyToken, item);
}
    
  // Section เงื่อนไขการตอบกลับ

else if (event.message.text === "ประกาศ")
  {
    return client.replyMessage(event.replyToken, info);
  }
  else if (event.message.text === "Lucky Wheel")
  {
    return client.replyMessage(event.replyToken, luckywheel);
  }
  else if (event.message.text.indexOf("50") !== -1||event.message.text.indexOf("รับโปร 50") !== -1)        
  {
    return client.replyMessage(event.replyToken,pro50);
  }
else if (event.message.text.indexOf("โปรโมชั่น") !== -1||event.message.text.indexOf("โปร") !== -1)
  {
    return client.replyMessage(event.replyToken, proreg);
  }

else if (event.message.text.indexOf("ฝา") !== -1||event.message.text.indexOf("ถอนขั้น") !== -1)
  {
    return client.replyMessage(event.replyToken, deposit);
  }

else if (event.message.text.indexOf("ธนาคาร") !== -1||event.message.text.indexOf("ฝาก") !== -1||event.message.text.indexOf("กรุง") !== -1)
  {
    return client.replyMessage(event.replyToken, bank);
  }

 else if (event.message.text.indexOf("แอด") !== -1||event.message.text.indexOf("สอบถาม") !== -1)       
  {
    return client.replyMessage(event.replyToken, chatwith);

  }
  else if (event.message.text.indexOf("สมัคร") !== -1||event.message.text.indexOf("สมัก") !== -1)       
  {
    return client.replyMessage(event.replyToken, register);

  }
 else if (event.message.text.indexOf("เกมส์แนะนำ") !== -1)
 {         
 return client.replyMessage(event.replyToken,gamereg);
 }

 else if (event.message.text.indexOf("เครดิ") !== -1|| event.message.text.indexOf("ไม่ต้องฝาก")!==-1|| event.message.text.indexOf("รับ100")!==-1)         
  {
    return client.replyMessage(event.replyToken,freecredit);
  }
  else if (event.message.text === "แอดมินเงินไม่เข้า" || event.message.text === "แอดเงินไม่เข้า" ||event.message.text.indexOf("เงินไม่")!==-1||event.message.text.indexOf("เงินไม่ได้")!==-1)
  {
    return client.replyMessage(event.replyToken,wait);
  }
else if (event.message.text.indexOf("สวั") !== -1|| event.message.text.indexOf("ฮั")!==-1)        
  {
    return client.replyMessage(event.replyToken,greeting);
  }
  else if (event.message.text.indexOf("เข้าเล่น") !== -1|| event.message.text.indexOf("เว็บ")!==-1|| event.message.text.indexOf("เว็ป")!==-1|| event.message.text.indexOf("ทางเข้า")!==-1)        
  {
    return client.replyMessage(event.replyToken,entrance);
  }
  else if (event.message.text.indexOf("ลืมรหั") !== -1)        
  {
    return client.replyMessage(event.replyToken,forget);
  }
   else if (event.message.text.indexOf("ไม่ได้") !== -1)        
  {
    return client.replyMessage(event.replyToken,problem);
  }
    else if (event.message.text.indexOf("ทรู") !== -1)        
  {
    return client.replyMessage(event.replyToken,truewallet);
  }
  

else
  {
    return client.replyMessage(event.replyToken, problem);
  }

  
};


const data = [

 {  "type":"text",
                "text":"เว็บกาชาดจังหวัดตรัง   โทรศัพท์ 075 501 095 ที่อยู่: 8, ถนนรื่นรมย์, ตำบลทับเที่ยง อำเภอเมือง จังหวัดตรัง 92000  https://www.facebook.com/pg/trangrc/posts/ "
}
]

const register = [

 {  "type":"text",
                "text":"💋 สมัครสมาชิกผ่านลิงค์นี้ได้เลยจ้า 💋\n\n 👩🏽‍💻 https://slotcat777.com/?openExternalBrowser=1 "

         }

]


const forget = [

 {  "type":"text",
                "text":"💋 ลืมรหัสผ่านใช่รึป่าว? 💋\n\n 👩🏽‍💻 ลองทักหาแอดมินดูสิ 👩🏽‍💻 \n\n👇 ที่ลิงค์นี้เลย 👇 \n\n https://lin.ee/4zt83jX"

         }

]

const pro50 = [

 {  "type":"text",
                "text":"🤑 รับโปร 50/50 🤑\n\n 🔥 รายละเอียด 🔥\n\n ✅ ไม่ต้องทำเทิร์น\n ✅ เล่นได้ทุกค่าย\n ✅ ถอนขั้นต่ำ 300  \n\n 👇 สนใจทักแอดมินที่ลิงค์นี้เลย 👇 \n\n https://lin.ee/4zt83jX"

         }

]
const problem = [

 {  "type":"text",
                "text":" 😢 คุณกำลังมีปัญหาอยู่ใช่รึป่าวค่ะ? ลองติดต่อแอดมินที่ลิ้งด้านล่างสิค่ะ จิ้มเลย👇👇  \n\n 👉🏻 https://lin.ee/4zt83jX"

         }

]



const item = [

{
          type: "template",
          altText: "🔥 รายละเอียยด 🔥",
          template: {
            type: "carousel",
            imageAspectRatio: "square",
            imageSize: "contain",
            columns: [
             {
                thumbnailImageUrl: "https://drive.google.com/uc?id=12KRka9_4GVJEdy280uODi7uMXyz8n1_9",
                imageBackgroundColor: "#030600",
                title: "\t\t กาชาดจังหวัดตรัง ",
                text: "โทรศัพท์ 075501095 \n ที่อยู่: 8,ถนนรื่นรมย์\nตำบลทับเที่ยง",
                actions: [
                 
                    {
                    type: "uri",
                    label: "รายละเอียดเพิ่มเติม",
                   uri: "https://www.facebook.com/pg/trangrc/posts?openExternalBrowser=1"
          }
                ]
              },
 
 {
                thumbnailImageUrl: "https://drive.google.com/uc?id=1cK00lkHze5ubr-DGF69ZLmY45hE0Z8HA",
                imageBackgroundColor: "#030600",
                title: "\t\t สถานบ้านพักคนชรา",
                text: "โทร 075574679\nที่อยู่ 113 ม.2 ต.ปากแจ่ม อ.ห้วยยอด",
                actions: [
                    {
                    type: "uri",
                    label : "รายละเอียดเพิ่มเติม",
                    uri : "https://www.facebook.com/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%87%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B9%8C%E0%B8%84%E0%B8%99%E0%B8%8A%E0%B8%A3%E0%B8%B2%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-%E0%B8%AD%E0%B8%AB%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A2%E0%B8%AD%E0%B8%94-%E0%B8%88%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-107904924436991?openExternalBrowser=1"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://drive.google.com/uc?id=1VfpHcl4vHxFTYja9lEs9IUnJesy4zuIP",
                imageBackgroundColor: "#030600",
                title: "\t\t เรือนจำจังหวัดตรัง",
                text: "โทร 075582336\nที่อยู่: 133 ม. 11 ตำบลโคกหล่อ อ.เมืองตรัง",
               
                actions: [
                    {
                    type: "uri",
                    label: "รายละเอียดเพิ่มเติม",
                   uri: "https://www.facebook.com/%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%88%E0%B8%B3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-100531712073093?openExternalBrowser=1"
          }
                ]
              },
          {
                thumbnailImageUrl: "https://drive.google.com/uc?id=178JtgmU8J7eYEDv8IIXLwEsSAwHBPxGk",
                imageBackgroundColor: "#ffffff",
                title: "\t\t สถานพินิจและคุ้มครองเด็กและเยาวชน",
                text: "โทร 075571439\nที่อยู่: 116 ม.3 ต.ทุ่งค่าย อ.ย่านตาขาว",
               
                actions: [
                   {
                    type: "uri",
                    label: "รายละเอียดเพิ่มเติม",
                   uri: "https://shorturl.at/hxD17?openExternalBrowser=1"
              }
            ]
            }
               
     
            ]
          }
}
];


// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});