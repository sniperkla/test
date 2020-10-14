'use strict';

const line = require('@line/bot-sdk');
const express = require('express');

const defaultAccessToken = '/GohQBLLz98RE6UhQhVt/B2sPGdsnyXjzBpACEZifTiyV6JU/qB1KRz3ohTMAqOZALcumN/tlu436xWqiAkFMJJws1hpeKGCio6JkV3SlRhmTyN2NEnzyiwmwXOxIFaviig9ja0EYdWF21AppHEGBQdB04t89/1O/w1cDnyilFU=';
const defaultSecret =   '4b5815d16220dbda2f54b22abaed303d' //'c87b61431b3ad1fb9b5fbcff5cc46241';
const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const request = require("request-promise");
const config = {
  channelAccessToken: defaultAccessToken,
  channelSecret:  defaultSecret,
};
const LINE_HEADER = {
  'Content-Type': 'application/json',
   Authorization: `Bearer </GohQBLLz98RE6UhQhVt/B2sPGdsnyXjzBpACEZifTiyV6JU/qB1KRz3ohTMAqOZALcumN/tlu436xWqiAkFMJJws1hpeKGCio6JkV3SlRhmTyN2NEnzyiwmwXOxIFaviig9ja0EYdWF21AppHEGBQdB04t89/1O/w1cDnyilFU=>`
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

   client.replyMessage(event.replyToken, follow);
    
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
    
   
 else if (event.message.text === 'Coming Soon'||event.message.text === 'previous'){ // ไว้ dubug เฉยๆ
  
  return request({
    method: 'DELETE',
    uri: `https://api.line.me/v2/bot/user/${idline}/richmenu`,
    headers: {
      Authorization: `Bearer {cxcH8hzWaWG6MOXpGByIes9ojXisQnlj5qMrRmRr2iv2I0eZru2eqfeyyhCizzHPMFvxR6HnHpOqEa4LddBMdvLoCSHKX6osxxQ9dyrpyGzbiInR1ac7aPFRVt4evi2yG+S3H1GUWzcWu2Bml59ffQdB04t89/1O/w1cDnyilFU=}`
    },
    json: true
  })
}
  // Section เงื่อนไขการตอบกลับ

else if (event.message.text==='วิธีการใช้งาน')
{
    return client.replyMessage(event.replyToken, howTo);
}
else if (event.message.text === "แจ้งเตือน")
  {
    return client.replyMessage(event.replyToken, info);
  }

  else if (event.message.text === "แจ้งฝาก")
  {
    return client.replyMessage(event.replyToken, depositalert);
  }
  else if (event.message.text==='โปรโมชั่นแนะนำ')
{
    return client.replyMessage(event.replyToken, recommend2);
}

else if (event.message.text === "เงื่อนไข 50%")
{

   return client.replyMessage(event.replyToken,condition1);
}
else if (event.message.text === "เงื่อนไข 10%")
{

   return client.replyMessage(event.replyToken,condition2);
}

else if (event.message.text.indexOf("โปร") !== -1||event.message.text.indexOf("pro") !== -1)
  {
    return client.replyMessage(event.replyToken, proreg);
  }

else if (event.message.text.indexOf("ฝากขั้นต่ำ") !== -1||event.message.text.indexOf("ถอนขั้น") !== -1)
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
 else if (event.message.text.indexOf("สมั") !== -1)
 {         
 return client.replyMessage(event.replyToken,regis);
 }

 else if (event.message.text.indexOf("เครดิ") !== -1|| event.message.text.indexOf("ไม่ต้องฝา")!==-1)         
  {
    return client.replyMessage(event.replyToken,freecredit);
  }
  else if (event.message.text === "แอดมินเงินไม่เข้า" || event.message.text === "แอดเงินไม่เข้า" ||event.message.text.indexOf("เงินไม่")!==-1)
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
else
  {
    return client.replyMessage(event.replyToken, test);
  }

  
};


const follow = [
{
"type": "text",
  "text": "🔥Slotcat 777 ยินดีต้อนรับนะเมี๊ยวว🔥"
 },promotion
            ];

// payload section


const quickreply = 
{
  "type": "text", 
  "text": "↔ สไลด์เพื่อดูรายการเพิ่มเติม ↔",
  "quickReply": { 
    "items": [

   
{
        "type": "action",
         "imageUrl": "https://niki999.com/joker515/1.jpg",
        "action": {
          "type": "message",
          "label": "ข่าวสาร/แจ้งเตือน",
          "text": "แจ้งเตือน"
        }
      },
     
      {
        "type": "action",
        "imageUrl": "https://niki999.com/joker515/1.jpg",
        "action": {
          "type": "message",
          "label": "รับเครดิตฟรี",
          "text": "เครดิตฟรี"
        }
      },
   {
        "type": "action",
         "imageUrl": "https://niki999.com/joker515/1.jpg",
        "action": {
          "type": "message",
          "label": "ระบบ ฝาก-ถอน",
          "text": "ฝากขั้นต่ำ - ถอนขั้นต่ำ"
        }
      },

        {
        "type": "action", 
         "imageUrl": "https://niki999.com/joker515/1.jpg",
        "action": {
          "type": "message",
          "label": "บัญชีธนาคาร",
          "text": "ธนาคาร"
        }
      },

       {
        "type": "action",
        "imageUrl": "https://niki999.com/joker515/1.jpg",
        "action": {
          "type": "message",
          "label": "ติดต่อแอดมิน",
          "text": "ติดต่อแอดมิน"
        }
      },

      {
        "type": "action",
        "imageUrl": "https://niki999.com/joker515/1.jpg",
        "action": {
          "type": "message",
          "label": "โปรโมชั่น",
          "text": "โปรโมชั่น"
        }
      },
    ]
  }
};

const depositalert = [

 {  "type":"text",
                "text":" 1.เข้าสู่ระบบ\n 2.แจ้งฝาก\n 3.ทำการโอนเงิน\n 4.รอการตรวจสอบ \n\n------ไทยพาณิชย์------ \n\n บัญชี : 945-2-38741-8 \n\n ชื่อ : สุจิตรา ศรีบุญรอด "
         },quickreply

]

const info = [

 {  "type":"text",
                "text":"ธนาคาร ไทยพาณิชย์ (SCB) จะมีการปิดปรับปรุงทุกวัน \nช่วงเวลา 23.00 - 24.00 น.\n\n ขอให้ลูกค้าหลีกเลี่ยงการเติมเงินในช่วงเวลาดังกล่าวนะคะ \n\n หากเผลอเติมมาในช่วงเวลาดังกล่าว สามารถแจ้งแอดมินได้ที่ลิงค์\n\nhttps://lin.ee/9oLGCNP"

         },quickreply

]


const wait = [

 {  "type":"text",
                "text":" เงินจะเข้าสู่ระบบอัตโนมัติ 1-5 นาที \n\n ให้ลองรีเฟซ ดูนะคะ \n\n หากใช้เวลานาน โปรดแจ้ง\n\n https://lin.ee/9oLGCNP"

         },quickreply

]



/*const probmoney = [

 {  "type":"text",
                "text":"ปัญหาเติมเงินไม่เข้า แจ้งแอดได้เลยค่ะที่ \n\n https://lin.ee/9oLGCNP"

         },quickreply

]*/

const bank = [
         {	"type":"text",
                "text":"------ไทยพาณิชย์------ \n\n บัญชี : 945-2-38741-8 \n\n ชื่อ : สุจิตรา ศรีบุญรอด"

         },quickreply

]

const deposit = [
         {	"type":"text",
                "text":"💯 ระบบ ฝาก-ถอน Auto 💯\n\n💵 ฝากเงินขั้นต่ำ : ไม่กำหนด \n\n💵 ถอนเงินขั้นต่ำ : 300 บาท"

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
                text: "✅ ภาพสวย เล่นเพลิน\n✅ แตกง่ายโบนัสเพียบ 🤩\n✅ จ่ายจริงต้อง ♚JOKER515♚",
               
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
                text: "🔥 เกมส์เพียบ รวมหลายค่าย\n🔥 Niki, Joker, SA, EVO\n🔥 เยอะสะใจแน่นอน",
                
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
                title: "🐟 ยิงปลาก็มีนะจ๊ะ 🐟",
                text: "💸 เล่นง่าย & เล่นเพลิน\n💸 แตกง่าย จ่ายไว\n💸 ปลอดภัย มั่นใจได้แน่นอน",
                
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
                title: "🃏 บาคาร่าออนไลน์ 🃏",
                text: "♦️ SA SEXY GAMING\n♦️ รวบรวมมาไว้ที่นี่\n♦️ มีแอดมินคอยดูแล 24 ชม.",
                
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
  "text": "          😍 สวัสดีค่ะคุณลูกค้า 😍\n\n 🤖 ฉันเป็นโปรแกรมตอบอัตโนมัติ 🤖 \n"
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


const chatwith = 
   [
{
  "type": "text",
  "text": "🤡 ติดต่อแอดมินได้ที่ 🤡\n\nhttps://lin.ee/9oLGCNP"
},quickreply
];


const freecredit =
   [
{
  "type": "text",
  "text": "🔥 กลับมาแล้วใครยังไม่ได้รับ เครดิตฟรี \n\n 😻 ทักหาแอดมิน ทำตามเงื่อนไข รับไปเลย 50 เครดิต \n\n ✅ ทำยอดได้ 1000 ถอนไปได้เลย 100\n\n🔻 จิ้มที่รูปได้เลยค่ะ"
},
 {
  "type": "imagemap",
  "baseUrl": "https://www.niki999.com/slotcat777/freecredit.jpg?w=cd4", //ใส่ param ?xxx เพื่อให้สามารถแสดงผลแบบ 1 รูปได้ หากไม่ใส่จะไม่สามารถ render รูปภาพได้
  "altText": "🔥 กลับมาแล้วจ้าใครยังไม่ได้รับ เครดิตฟรี",
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
      "linkUri": "https://lin.ee/9oLGCNP"
    }
  ]
},quickreply
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
                thumbnailImageUrl: "https://niki999.com/slotcat777/2.jpg?se=11",
                imageBackgroundColor: "#030600",
                title: "\t\t💎ผู้เล่นใหม่ ฝาก 50 รับ 50💎",
                text: "✅  รับไปเลยทันที50\n✅  ไม่ต้องทำยอดเทริ์น 🤩\n✅  เล่นได้ทุกค่าย",
               
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
                text: "🤧  บิลเสีย 5 ครั้ง \n🤧 รับเงินคืนทันที)\n🤧 สูงสุด 200 บาท เทริ์น3เท่า",
               
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
                title: "\t\t✨ออกอวกาศครบ 7 วัน ✨",
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
                title: "\t\t✨แนะนำเพื่อน ✨",
                text: "🥳 ยิ่งชวนเพื่อนมาก\n🥳 ยิ่งมีโอกาสได้มาก \n🥳 ให้เยอะที่สุด 2%",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://slotcat777.com?openExternalBrowser=1"
          }
                ]
              },
                 {
                thumbnailImageUrl: "https://niki999.com/slotcat777/6.jpg?xx=4c",
                imageBackgroundColor: "#030600",
                title: "\t\t🍲 มื้อเที่ยงบนดวงจันทร์ 🍲",
                text: "🥢 ฝากตามช่วงเวลา \n🥢 รับโบนัสไปเลย\n🥢 เทริ์นเพียง 3 เท่า",
               
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


 
// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});