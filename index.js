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

if (event.message.text.indexOf("บริจาคสิ่งของ") !== -1||event.message.text.indexOf("สิ่งของ") !== -1)
{

   return client.replyMessage(event.replyToken, item);
}
    
  // Section เงื่อนไขการตอบกลับ

else if (event.message.text.indexOf("บริจาคเสื้อผ้า") !== -1||event.message.text.indexOf("เสื้อผ้า") !== -1)
  {
    return client.replyMessage(event.replyToken, cloth);
  }

  else if (event.message.text.indexOf("บริจาคเลือด") !== -1)
  {
    return client.replyMessage(event.replyToken, blood);
  }

 else if (event.message.text.indexOf("บริจาคอุปกรณ์ทางการแพทย์") !== -1||event.message.text.indexOf("เครื่องมือทางการแพทย์") !== -1||event.message.text.indexOf("อุปกรณ์ทางการแพทย์") !== -1)
  {
    return client.replyMessage(event.replyToken, tooldoc);
  }

  else if (event.message.text.indexOf("บริจาคอาหาร") !== -1||event.message.text.indexOf("อาหาร") !== -1)
  {
    return client.replyMessage(event.replyToken, food);
  }
  
else
  {
    return client.replyMessage(event.replyToken, item);
  }
  
};










const cloth = [

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
              }
               
     
            ]
          }
}
];
const tooldoc = [
  {
          type: "template",
          altText: "🔥 รายละเอียยด 🔥",
          template: {
            type: "carousel",
            imageAspectRatio: "square",
            imageSize: "contain",
            columns: [
   {
                thumbnailImageUrl: "https://drive.google.com/uc?id=1GOCHvnwcpHBXx3p8kJCRLHRcSnv437N5",
                imageBackgroundColor: "#030600",
                title: "\t\t โรงพยาบาลตรัง",
                text: "โทร 075201500\nที่อยู่ 69 ต.ทับเที่ยง อ.เมืองตรัง",
                actions: [
                    {
                    type: "uri",
                    label : "รายละเอียดเพิ่มเติม",
                    uri : "https://www.facebook.com/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-331023247355513?openExternalBrowser=1"
                
                }
                ]
              },
         
             {
                thumbnailImageUrl: "https://drive.google.com/uc?id=1nTDcvx0nD4qYMwPKc4aTZxcD9C9P_i9m",
                imageBackgroundColor: "#030600",
                title: "\t\t หน่วยกู้ภัย มูลนิธิกุศลสถานตรัง",
                text: "โทรศัพท์ 075215554 \n ที่อยู่ 127 ,ถ.โรงเรียน ต.ทับเที่ยง\nอ.เมืองตรัง",
                actions: [
                    {
                    type: "uri",
                    label: "รายละเอียดเพิ่มเติม",
                   uri: "https://www.facebook.com/KUSOLSATHANTRANG?openExternalBrowser=1"
          }
                ]
              },
                 {
                thumbnailImageUrl: "https://drive.google.com/uc?id=1JkYGhheqRqnrhuCiAzHNFSI8aA1GJhO4",
                imageBackgroundColor: "#030600",
                title: "\t\t มูลนิธิสว่างภักดีตรังธรรมสถาน",
                text: "โทรศัพท์  075820328 \n ที่อยู่ 229/23 ต. บางรัก \nอ.เมืองตรัง",
                actions: [
                    {
                    type: "uri",
                    label: "รายละเอียดเพิ่มเติม",
                   uri: "https://www.facebook.com/%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%99%E0%B8%B4%E0%B8%98%E0%B8%B4%E0%B8%AA%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A0%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99-102586631228919?openExternalBrowser=1"
          }
                ]
              }
     
            ]
          }
}
];


const blood = [
{
          type: "template",
          altText: "🔥 รายละเอียยด 🔥",
          template: {
            type: "carousel",
            imageAspectRatio: "square",
            imageSize: "contain",
            columns: [
   {
                thumbnailImageUrl: "https://drive.google.com/uc?id=1GOCHvnwcpHBXx3p8kJCRLHRcSnv437N5",
                imageBackgroundColor: "#030600",
                title: "\t\t โรงพยาบาลตรัง",
                text: "โทร 075201500\nที่อยู่ 69 ต.ทับเที่ยง อ.เมืองตรัง",
                actions: [
                    {
                    type: "uri",
                    label : "รายละเอียดเพิ่มเติม",
                    uri : "https://www.facebook.com/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-331023247355513?openExternalBrowser=1"
                
                }
                ]
              },
              
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
              }
     
            ]
          }
}
];

const food = [

{
          type: "template",
          altText: "🔥 รายละเอียยด 🔥",
          template: {
            type: "carousel",
            imageAspectRatio: "square",
            imageSize: "contain",
            columns: [
 
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
                thumbnailImageUrl: "https://drive.google.com/uc?id=1GOCHvnwcpHBXx3p8kJCRLHRcSnv437N5",
                imageBackgroundColor: "#030600",
                title: "\t\t โรงพยาบาลตรัง",
                text: "โทร 075201500\nที่อยู่ 69 ต.ทับเที่ยง อ.เมืองตรัง",
                actions: [
                    {
                    type: "uri",
                    label : "รายละเอียดเพิ่มเติม",
                    uri : "https://www.facebook.com/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-331023247355513?openExternalBrowser=1"
                
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