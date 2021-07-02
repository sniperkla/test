'use strict';

const line = require('@line/bot-sdk');
const express = require('express');

const defaultAccessToken = 'kzSr4KLDyKblOMCOuFwXswlP/PJSYSumtOnc/FTZuveD6flLnFaROwxrjv891F5/1QjVmWDICfYMHD1tlxlkhM3vz6+XbdaTiyeT0+yPN04q0JmsjEdNhRfUZ/MAm/iRJcGx+6irqwGBac4lQGpK8wdB04t89/1O/w1cDnyilFU=';
const defaultSecret =   'c87b61431b3ad1fb9b5fbcff5cc46241' //'c87b61431b3ad1fb9b5fbcff5cc46241';
const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const request = require("request-promise");
const config = {
  channelAccessToken: defaultAccessToken,
  channelSecret:  defaultSecret,
};
const LINE_HEADER = {
  'Content-Type': 'application/json',
   Authorization: `Bearer <kzSr4KLDyKblOMCOuFwXswlP/PJSYSumtOnc/FTZuveD6flLnFaROwxrjv891F5/1QjVmWDICfYMHD1tlxlkhM3vz6+XbdaTiyeT0+yPN04q0JmsjEdNhRfUZ/MAm/iRJcGx+6irqwGBac4lQGpK8wdB04t89/1O/w1cDnyilFU=>`
};
//kzSr4KLDyKblOMCOuFwXswlP/PJSYSumtOnc/FTZuveD6flLnFaROwxrjv891F5/1QjVmWDICfYMHD1tlxlkhM3vz6+XbdaTiyeT0+yPN04q0JmsjEdNhRfUZ/MAm/iRJcGx+6irqwGBac4lQGpK8wdB04t89/1O/w1cDnyilFU=
const client = new line.Client(config);


const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/webhook', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result));

    
});

function handleEvent(event) {
  var idline = event.source.userId; // ดึง user id ของผู้ใช้งาน
 
 /* const options = {
    url: 'https://niki999.com/member/getLine/'+idline,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
    }*/

   console.log(quickreply);

 if (event.type === 'follow') {

   client.replyMessage(event.replyToken,follow);
    
  } 
if (event.message.type === 'image') {//กรณ๊อื่น ที่เป็น image ส่วนมากจะเป็น พวก แจ้งฝาก
return client.replyMessage(event.replyToken, wait);
    }
 
   if (event.message.type !== 'text') //กรณ๊อื่น ที่ส่งมาไม่ได้เป็น text เช่น sticker image audio location
   {
return client.replyMessage(event.replyToken, test);
    }


if (event.message.text === 'เข้าสู่ระบบ')
{

   return client.replyMessage(event.replyToken, forlogin);
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

// payload section

const quickreply = 
{
  "type": "text", 
  "text": "สไลด์เพื่อดูรายการเพิ่มเติม",
  "quickReply": { 
    "items": [
    {
        "type": "action",
        "imageUrl": "https://niki999.com/slotcat777/catprofile.jpg",
        "action": {
          "type": "message",
          "label": "Lucky Wheel",
          "text": "Lucky Wheel"
        }
      },
 {
        "type": "action",
        "imageUrl": "https://niki999.com/slotcat777/catprofile.jpg",
        "action": {
          "type": "message",
          "label": "โปรโมชั่น",
          "text": "โปรโมชั่น"
        }
      },
    {
        "type": "action",
        "imageUrl": "https://niki999.com/slotcat777/catprofile.jpg",
        "action": {
          "type": "message",
          "label": "เกมส์แนะนำ",
          "text": "เกมส์แนะนำ"
        }
      },
          {
        "type": "action",
        "imageUrl": "https://niki999.com/slotcat777/catprofile.jpg",
        "action": {
          "type": "message",
          "label": "ติดต่อแอดมิน",
          "text": "ติดต่อแอดมิน"
        }
      },
{
        "type": "action",
         "imageUrl": "https://niki999.com/slotcat777/catprofile.jpg",
        "action": {
          "type": "message",
          "label": "ประกาศ/ข่าวสาร",
          "text": "ประกาศ"
        }
      },

     
      {
        "type": "action",
        "imageUrl": "https://niki999.com/slotcat777/catprofile.jpg",
        "action": {
          "type": "message",
          "label": "รับเครดิตฟรี",
          "text": "เครดิตฟรี"
        }
      },



   {
        "type": "action",
         "imageUrl": "https://niki999.com/slotcat777/catprofile.jpg",
        "action": {
          "type": "message",
          "label": "ระบบ ฝาก-ถอน",
          "text": "ฝากขั้นต่ำ - ถอนขั้นต่ำ"
        }
      },

        {
        "type": "action", 
         "imageUrl": "https://niki999.com/slotcat777/catprofile.jpg",
        "action": {
          "type": "message",
          "label": "บัญชีธนาคาร",
          "text": "ธนาคาร"
        }
      },
    ]
  }
};
const truewallet = [

 {  "type":"text",
                "text":"🏧 โอนผ่าน True Wallet ได้จากบัญชีด้านล่างได้เลยค่ะ\n\n--- ทรูวอลเล็ต ---\n ✅ กิติยา รักษาเพชร : 0642735126\n\n(เบอร์ที่โอนเข้ามาต้องตรงกับเลขที่สมัครมาเท่านั้น)"

         },quickreply

]

const register = [

 {  "type":"text",
                "text":"💋 สมัครสมาชิกผ่านลิงค์นี้ได้เลยจ้า 💋\n\n 👩🏽‍💻 https://slotcat777.com/?openExternalBrowser=1 "

         },quickreply

]


const forget = [

 {  "type":"text",
                "text":"💋 ลืมรหัสผ่านใช่รึป่าว? 💋\n\n 👩🏽‍💻 ลองทักหาแอดมินดูสิ 👩🏽‍💻 \n\n👇 ที่ลิงค์นี้เลย 👇 \n\n https://lin.ee/4zt83jX"

         },quickreply

]

const pro50 = [

 {  "type":"text",
                "text":"🤑 รับโปร 50/50 🤑\n\n 🔥 รายละเอียด 🔥\n\n ✅ ไม่ต้องทำเทิร์น\n ✅ เล่นได้ทุกค่าย\n ✅ ถอนขั้นต่ำ 300  \n\n 👇 สนใจทักแอดมินที่ลิงค์นี้เลย 👇 \n\n https://lin.ee/4zt83jX"

         },quickreply

]
const problem = [

 {  "type":"text",
                "text":" 😢 คุณกำลังมีปัญหาอยู่ใช่รึป่าวค่ะ? ลองติดต่อแอดมินที่ลิ้งด้านล่างสิค่ะ จิ้มเลย👇👇  \n\n 👉🏻 https://lin.ee/4zt83jX"

         },quickreply

]


const wait = [

 {  "type":"text",
                "text":" ⏳ เงินจะเข้าสู่ระบบอัตโนมัติ 1-5 นาที ⏳ \n\n ✅ ลูกค้าลอง รีเฟซ ดูนะคะ หากครบเวลา ✅\n\n ⚠️ หากใช้เวลานานเกินไป รบกวนแจ้งแอดมิน ได้จากลิงค์ด้านล่างได้เลยจ้า ⚠️\n\n 👉 https://lin.ee/4zt83jX"

         },quickreply

]

const gamereg =
   [
     {
                "type":"text",
                "text":"      💸 5 เกมส์ทำเงิน ที่ดีที่สุด 💸 \n\n 👑 จากค่ายHotgraph, Nikigames และ Joker Gaming คัดมาให้เน้นๆ \n\n📱 จะมีเกมส์ไหนบ้าง เช็คได้จากรูปได้เลยเมี๊่ยวว 😽"
      },

    {
   "type": "template",
    "altText": "🔥 5 เกมส์ทำเงิน ที่ดีที่สุดจากค่าย Nikigames",
    "template": {
      "columns": [
      {
          "imageUrl": "https://niki999.com/slotcat777/hotgraph.png",
          "action": {
           
            "type": "uri",
            "uri": "https://slotcat777.com/?openExternalBrowser=1"
          }
        },

 {
          "imageUrl": "https://niki999.com/slotcat777/pg1.jpg",
          "action": {
           
            "type": "uri",
            "uri": "https://slotcat777.com/?openExternalBrowser=1"
          }
        },
              {
          "action": {
            "uri": "https://slotcat777.com/?openExternalBrowser=1",
            "type": "uri"
           
          },
          "imageUrl": "https://niki999.com/slotcat777/hot.jpg"
        },
  {
          "imageUrl": "https://niki999.com/slotcat777/hotjoker.jpg",
          "action": {
           
            "type": "uri",
            "uri": "https://slotcat777.com/?openExternalBrowser=1"
          }
        }
      ],
      "type": "image_carousel"
    }
   },quickreply
];


const info = [

 {  "type":"text",
                "text":"⚠️ ประกาศ ⚠️\n\n👉 ทางธนาคาร SCB (ไทยพาณิชย์) จะมีการปิดปรับปรุงระบบ \n\n👉 ตั้งแต่ช่วงเวลา 23.00 - 24.00 น. ของทุกวัน\n\n👉 ขอให้ลูกค้าหลีกเลี่ยงการเติมเงินในช่วงเวลาดังกล่าวผ่านธนาคาร SCB นะคะ\n\n📱 หากพบเจอปัญหา หรือ มีปัญหาใดๆ สามารถแจ้งแอดมินได้ที่ลิงค์\n\nhttps://lin.ee/4zt83jX"

         },quickreply

]


/*const probmoney = [

 {  "type":"text",
                "text":"ปัญหาเติมเงินไม่เข้า แจ้งแอดได้เลยค่ะที่ \n\n https://lin.ee/9oLGCNP"

         },quickreply

]*/

const bank = [
         {	
  "type": "text",
  "text": "🏧 ลูกค้าสามารถโอนเข้าบัญชีไหนก็ได้ จากด้านล่างนี้นะคะ \n\n ⚠️ หากโอนเข้ามานอกเหนือจากบัญชีที่เรากำหนด เราจะไม่รับผิดชอบใดๆทั้งสิ้นค่ะ\n\n--- ธนาคารกรุงศรีอยุธยา--\n779-1-06352-5\nนายณรงค์ฤทธิ์ ชูสังข์\n(เลขบัญชีที่โอนเข้ามาต้องตรงกับเลขที่สมัครมาเท่านั้น) \n\n--- ธนาคารไทยพาณิชย์ ---\n654-259351-5\nนาง สุภาภรณ์ ธรรมา\n(เลขบัญชีที่โอนเข้ามาต้องตรงกับเลขที่สมัครมาเท่านั้น) \n\n--- ทรูวอลเล็ต ---\nกิติยา รักษาเพชร : 0642735126\n\n(เบอร์ที่โอนเข้ามาต้องตรงกับเลขที่สมัครมาเท่านั้น) "

         },quickreply

]

const deposit = [
         {	"type":"text",
                "text":"🔥ฝาก-ถอน เร็วทันใจ เราทำไว🔥\n\n💵 ฝากเงินขั้นต่ำ : ไม่กำหนด \n\n💵 ถอนเงินขั้นต่ำ : 300 บาท\n\n👉 หากต้องการสอบถาม  https://lin.ee/4zt83jX คลิ๊กเลยจ้าา"

         },quickreply

]


const promotion = [
         {
                "type":"text",
                "text":"📲 สไลด์เพื่อดูโปรโมชั่นเพิ่มเติม 📲"
        },


{
          type: "template",
          altText: "🔥 โปรโมชั่นมาแรงส์ 🔥",
          template: {
            type: "carousel",
            imageAspectRatio: "square",
            imageSize: "contain",
            columns: [
              {
                thumbnailImageUrl: "https://media.giphy.com/media/fvGynMKHiXYUauCe4C/giphy.gif",
                imageBackgroundColor: "#030600",
                title: "\t\t💞 ค่ายเกมส์ที่ไม่ควรพลาด 💞",
                text: "✅ ภาพสวย เล่นเพลิน\n✅ แตกง่ายโบนัสเพียบ 🤩\n✅ จ่ายจริง",
               
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                   uri: "https://slotcat777.com/?openExternalBrowser=1"
                  },
                    {
                    type: "uri",
                    label: " ติดต่อแอดมิน ",
                   uri: "https://lin.ee/9oLGCNP"
          }
                ]
              },
          
               {
                thumbnailImageUrl: "https://niki999.com/slotcat777/3.jpg",
                imageBackgroundColor: "#030600",
                title: "🎰 สล๊อตออนไลน์ 🎰",
                text: "🔥 เกมส์เพียบ รวมหลายค่าย\n🔥 Niki, Joker, SA, Simple\n🔥 มีเยอะสะใจแน่นอน",
                
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                    uri: "https://slotcat777.com/?openExternalBrowser=1"
                  },
           {
                    type: "uri",
                    label: "  ติดต่อแอดมิน ",
                   uri: "https://lin.ee/4zt83jX"
          }
                ]
              },
               {
                thumbnailImageUrl: "https://niki999.com/slotcat777/fish.jpg",
                imageBackgroundColor: "#030600",
                title: "🐟 ยิงปลา/เล่นง่าย/ภาพสวย 🐟",
                text: "💯 เล่นง่าย ภาพสวย\n💯 แตกบ่อย จ่ายจริง\n💯 ปลอดภัย มั่นใจได้ 100%",
                
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                    uri: "https://slotcat777.com?openExternalBrowser=1"
                  },
           {
                    type: "uri",
                    label: "  ติดต่อแอดมิน ",
                   uri: "https://lin.ee/4zt83jX"
          }
                ]
              },
                {
                thumbnailImageUrl: "https://niki999.com/slotcat777/casino.jpg",
                imageBackgroundColor: "#030600",
                title: "😍 บาคาร่าออนไลน์ 😍",
                text: "💋 SA SEXY GAMING\n💋 รวบรวมมาไว้ที่นี่\n💋 มีครบเล่นเพลิน",
                
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                    uri: "https://slotcat777.com/?openExternalBrowser=1"
                  },
           {
                    type: "uri",
                    label: "  ติดต่อแอดมิน ",
                   uri: "https://lin.ee/4zt83jX"
          }
                ]
              }

            ]
          }
},quickreply

];
    const test = 
   [
   {
   "type": "text",
  "text": "          😻 สวัสดีนะเมี๊ยววว 😻\n\n 🤖 ฉันเป็นโปรแกรมตอบอัตโนมัติ 🤖 \n\n😿 ฉันไม่เข้าใจในสิ่งที่คุณถาม 😿\n\n 👉 คุยกับแอดมินจิ้มตรงนี้เลยจ้า\n  https://lin.ee/4zt83jX"
   },
    quickreply
   ];

const regis = 
   [
  {
  "type": "text",
  "text": "💖 สมัครสมาชิกได้ที่ 💖  \n\nhttps://slotcat777.com?openExternalBrowser=1"
},quickreply

];
const entrance = 
   [
{
  "type": "text",
  "text": "😻 เข้าเล่นผ่านลิงค์นี้ได้เลยเมี๊ยวว 😻"
},
  {
  "type": "text",
  "text": "https://slotcat777.com?openExternalBrowser=1"
},quickreply
];

const chatwith = 
   [
{
  "type": "text",
  "text": "📱 พูดคุย/แจ้งปัญหา 📱\n\nhttps://lin.ee/4zt83jX"
},quickreply
];


const freecredit =
   [
{
  "type": "text",
  "text": "😿 เครดิตฟรีหมดแล้วจ้า ไว้เข้ามาร่วมกิจกรรมกันใหม่รอบหน้านะคะ \n "
},quickreply/*,
 {
  "type": "imagemap",
  "baseUrl": "https://www.niki999.com/slotcat777/freecredit.jpg?w=cd4", //ใส่ param ?xxx เพื่อให้สามารถแสดงผลแบบ 1 รูปได้ หากไม่ใส่จะไม่สามารถ render รูปภาพได้
  "altText": "🔥 เครดิตฟรี 100",
  "baseSize": {
    "width": 1040,
    "height": 1040
  },
  "actions": [
    {
      "type": "uri",
      "area": {
        "x": 2,
        "y": 0,
        "width": 1037,
        "height": 1039
      },
      "linkUri": "https://lin.ee/4zt83jX"
    }
  ]*/
];

const proreg = [

{
          type: "template",
          altText: "🔥 โปรโมชั่นมาแรงส์ 🔥",
          template: {
            type: "carousel",
            imageAspectRatio: "square",
            imageSize: "contain",
            columns: [
             {
                thumbnailImageUrl: "https://niki999.com/slotcat777/firstday.jpg?fe=4c",
                imageBackgroundColor: "#030600",
                title: "\t\t⛅ ฝากแรกของวันรับไปเลย ⛅",
                text: "🔥 ฝากแรกของวัน \n🔥 รับเน้นๆ 20 % \n🔥 ฝากขั้นต่ำ 100 สูงสุด 5000",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "เข้าเล่น",
                   uri: "https://slotcat777.com/login?openExternalBrowser=1"
          }
                ]
              },
 /* {
                thumbnailImageUrl: "https://niki999.com/slotcat777/huay.jpg?x=ac",
                imageBackgroundColor: "#030600",
                title: "\t\t🎉 ต้อนรับหวยออก 🎉",
                text: "🔥 ทุกยอดฝาก \n🔥 รับไปเลย 20%\n🔥 เฉพาะวันนี้เท่านั้น",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปร",
                   uri: "https://www.slotcat777.com/login?openExternalBrowser=1"
          }
                ]
              },*/

         /*     {
                thumbnailImageUrl: "https://niki999.com/slotcat777/hotgraph.png?fe=4c",
                imageBackgroundColor: "#030600",
                title: "\t\t📈 เกมส์สุดฮิต Hotgraph 📈",
                text: "✅ มาใหม่เล่นเพลิน \n✅ เล่นง่าย \n✅ แตกบ่อย จ่ายจริง",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "เข้าเล่น",
                   uri: "https://slotcat777.com/login?openExternalBrowser=1"
          }
                ]
              },

              {
                thumbnailImageUrl: "https://niki999.com/slotcat777/pg1.jpg?fe=4c",
                imageBackgroundColor: "#030600",
                title: "\t\t🎁 ค่ายใหม่ PG SLOT 🎁",
                text: "✌️ ภาพสวย มาแรง \n✌️ เล่นง่าย,เกมเยอะ\n✌️ แตกบ่อย แตกหนัก",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "เข้าเล่น",
                   uri: "https://slotcat777.com/login?openExternalBrowser=1"
          }
                ]
              },*/
 {
                thumbnailImageUrl: "https://niki999.com/slotcat777/lucky2.jpg?se=11",
                imageBackgroundColor: "#030600",
                title: "\t\t☸️ Luky Wheel กงล้อพารวย ☸️",
                text: "🔥 เติมเงินครบทุกๆ 1,000\n🔥 รับสิทธิ์หมุน 1 ครั้ง \n🔥 ไม่จำกัดการหมุน",
               
                actions: [
                    {
                    type: "message",
                    label : "ดูรายละเอียด",
                    text : "Lucky Wheel"
          }
                ]
              },
              {
                thumbnailImageUrl: "https://niki999.com/slotcat777/2.jpg?se=11",
                imageBackgroundColor: "#030600",
                title: "\t\t💎 ผู้เล่นใหม่ ฝาก 50 รับ 50 💎",
                text: "✅ รับไปเลยทันทีอีก 50\n✅ ไม่ต้องทำยอดเทริ์น \n✅ เล่นได้ทุกค่าย",
               
                actions: [
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://lin.ee/4zt83jX"
          }
                ]
              },
          {
                thumbnailImageUrl: "https://niki999.com/slotcat777/10per.jpg?se=11",
                imageBackgroundColor: "#030600",
                title: "\t\t🕥 ทุกยอดฝากรับ 10 % 🕙",
                text: "✌️ รับไปเลยเต็มๆ 10 %\n✌️ สูงสุด 1,000 บาท \n✌️ ยอด3เท่าเครดิต+โบนัส",
               
                actions: [
                   {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://slotcat777.com?openExternalBrowser=1"
          }
                ]
              },



               {
                thumbnailImageUrl: "https://niki999.com/slotcat777/8.jpg?se=1s",
                imageBackgroundColor: "#030600",
                title: "\t\t😿 ปลอบใจ กลับโลกมือเปล่า 😿",
                text: "🤧  บิลเสีย 5 ครั้ง \n🤧 รับเงินคืนทันที\n🤧 สูงสุด 200 บาท เทริ์น 3 เท่า",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://slotcat777.com?openExternalBrowser=1"
          }
                ]
              },
                {
                thumbnailImageUrl: "https://niki999.com/slotcat777/4.jpg?xx=4c",
                imageBackgroundColor: "#030600",
                title: "\t\t🌒 ออกอวกาศครบ 7 วัน 🌒 ",
                text: "🚀 ฝากอย่างน้อย 300 บาท \n🚀 ครบ 7 วัน \n🚀 รับไปเลย 300",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://slotcat777.com?openExternalBrowser=1"
          }
                ]
              },
              {
                thumbnailImageUrl: "https://niki999.com/slotcat777/5.jpg?xx=4c",
                imageBackgroundColor: "#030600",
                title: "\t\t✨ แนะนำเพื่อน ✨",
                text: "🥳 ยิ่งชวนเพื่อนมาก\n🥳 ยิ่งมีโอกาสได้มาก \n🥳 ให้เยอะที่สุด 2%",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://slotcat777.com?openExternalBrowser=1"
          }
                ]
              }
               
     
            ]
          }
},quickreply
];
const proreg2 = [

{
          type: "template",
          altText: "🔥 โปรโมชั่นมาแรงส์ 🔥",
          template: {
            type: "carousel",
            imageAspectRatio: "square",
            imageSize: "contain",
            columns: [

/*   {
                thumbnailImageUrl: "https://niki999.com/slotcat777/huay.jpg?x=ac",
                imageBackgroundColor: "#030600",
                title: "\t\t🎉 ต้อนรับหวยออก 🎉",
                text: "🔥 ทุกยอดฝาก \n🔥 รับไปเลย 20%\n🔥 เฉพาะวันนี้เท่านั้น",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปร",
                   uri: "https://www.slotcat777.com/login?openExternalBrowser=1"
          }
                ]
              },*/

              {
                thumbnailImageUrl: "https://niki999.com/slotcat777/pg1.jpg?fe=4c",
                imageBackgroundColor: "#030600",
                title: "\t\t🎁 ค่ายใหม่ PG SLOT 🎁",
                text: "✌️ ภาพสวย มาแรง \n✌️ เล่นง่าย,เกมเยอะ\n✌️ แตกบ่อย แตกหนัก",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "เข้าเล่น",
                   uri: "https://slotcat777.com/login?openExternalBrowser=1"
          }
                ]
              },
 {
                thumbnailImageUrl: "https://niki999.com/slotcat777/lucky2.jpg?se=11",
                imageBackgroundColor: "#030600",
                title: "\t\t☸️ Luky Wheel กงล้อพารวย ☸️",
                text: "🔥 เติมเงินครบทุกๆ 1,000\n🔥 รับสิทธิ์หมุน 1 ครั้ง \n🔥 ไม่จำกัดการหมุน",
               
                actions: [
                    {
                    type: "message",
                    label : "ดูรายละเอียด",
                    text : "Lucky Wheel"
          }
                ]
              },
              {
                thumbnailImageUrl: "https://niki999.com/slotcat777/2.jpg?se=11",
                imageBackgroundColor: "#030600",
                title: "\t\t💎 ผู้เล่นใหม่ ฝาก 50 รับ 50 💎",
                text: "✅ รับไปเลยทันทีอีก 50\n✅ ไม่ต้องทำยอดเทริ์น \n✅ เล่นได้ทุกค่าย",
               
                actions: [
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://lin.ee/4zt83jX"
          }
                ]
              },
          {
                thumbnailImageUrl: "https://niki999.com/slotcat777/10per.jpg?s=11",
                imageBackgroundColor: "#030600",
                title: "\t\t🕥 ทุกยอดฝากรับ 10 % 🕙",
                text: "✌️ รับไปเลยเต็มๆ 10 %\n✌️ สูงสุด 1,000 บาท \n✌️ ทำเทริ์นเพียง 3 เท่า",
               
                actions: [
                   {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://slotcat777.com?openExternalBrowser=1"
          }
                ]
              },




               {
                thumbnailImageUrl: "https://niki999.com/slotcat777/8.jpg?e=1s",
                imageBackgroundColor: "#030600",
                title: "\t\t😿 ปลอบใจ กลับโลกมือเปล่า 😿",
                text: "🤧  บิลเสีย 5 ครั้ง \n🤧 รับเงินคืนทันที\n🤧 สูงสุด 200 บาท เทริ์น 3 เท่า",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://slotcat777.com?openExternalBrowser=1"
          }
                ]
              },
                {
                thumbnailImageUrl: "https://niki999.com/slotcat777/4.jpg?x=4c",
                imageBackgroundColor: "#030600",
                title: "\t\t🌒 ออกอวกาศครบ 7 วัน 🌒 ",
                text: "🚀 ฝากอย่างน้อย 300 บาท \n🚀 ครบ 7 วัน \n🚀 รับไปเลย 300",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://slotcat777.com?openExternalBrowser=1"
          }
                ]
              },
              {
                thumbnailImageUrl: "https://niki999.com/slotcat777/5.jpg?x=4c",
                imageBackgroundColor: "#030600",
                title: "\t\t✨ แนะนำเพื่อน ✨",
                text: "🥳 ยิ่งชวนเพื่อนมาก\n🥳 ยิ่งมีโอกาสได้มาก \n🥳 ให้เยอะที่สุด 2%",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://slotcat777.com?openExternalBrowser=1"
          }
                ]
              }
               
     
            ]
          }
},quickreply
];



const follow = proreg
const luckywheel = [{
  "type": "text",
  "text": "    💋  รายละเอียดกิจกรรม 💋\n\n🎁   ทุกๆการเติม ครบ 1,000 บาท \n🎁   รับไปเลย สิทธิ์หมุนฟรี 1 ครั้ง\n🎁   ทำยอด 3 เท่าถอนได้ทันที\n🎁   เติมเข้ามาเยอะยิ่งมีโอกาสได้เยอะนะเมี๊ยวว \n\n🚨 ไม่จำกัดจำนวนครั้ง 🚨\n---------------------------\n\n ✅  วิธีการได้รับสิทธิ์ ✅\n 🔻 ทุกๆการเติมครบ 1,000 บาท \n 🔻 จะได้สิทธิ์หมุน 1 ครั้ง\n\n ✅  วิธีเช็คสิทธิ์การหมุน ✅\n🔻 log in ผ่านหน้าเว็ปไซต์\n🔻 https://slotcat777.com?openExternalBrowser=1\n🔻 จะขึ้นสิทธิ์จำนวนการหมุน\n🔻 กด เพื่อทำการหมุน"

},quickreply];

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});