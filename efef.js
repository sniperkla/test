'use strict';

const line = require('@line/bot-sdk');
const express = require('express');

const defaultAccessToken = 'cxcH8hzWaWG6MOXpGByIes9ojXisQnlj5qMrRmRr2iv2I0eZru2eqfeyyhCizzHPMFvxR6HnHpOqEa4LddBMdvLoCSHKX6osxxQ9dyrpyGzbiInR1ac7aPFRVt4evi2yG+S3H1GUWzcWu2Bml59ffQdB04t89/1O/w1cDnyilFU=';
const defaultSecret = '311e13d1b2c81a48d8ab10c4970637ba';
const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const request = require("request-promise");
const config = {
  channelAccessToken: defaultAccessToken,
  channelSecret:  defaultSecret,
};
const LINE_HEADER = {
  'Content-Type': 'application/json',
   Authorization: `Bearer <cxcH8hzWaWG6MOXpGByIes9ojXisQnlj5qMrRmRr2iv2I0eZru2eqfeyyhCizzHPMFvxR6HnHpOqEa4LddBMdvLoCSHKX6osxxQ9dyrpyGzbiInR1ac7aPFRVt4evi2yG+S3H1GUWzcWu2Bml59ffQdB04t89/1O/w1cDnyilFU=>`
};

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
  var idline = event.source.userId;
const options = {
    url: 'https://niki999.com/member/getLine/'+idline,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
    }
};
 if (event.type === 'follow') {
      client.replyMessage(event.replyToken, follow); 
      
    
  }
if (event.message.text === 'เข้าสู่ระบบ'){
  
request(options, function(err, res, body) {
    let json = JSON.parse(body);
    if (json === null)
    {
    var customerName = null;
    }
    else 
    var customerName = json.user_id_line;


    console.log(customerName);
    if (customerName === idline)
    {// || customerName === null){
    client.replyMessage(event.replyToken, forReg);
   return request({
    method: 'POST',
    uri: `https://api.line.me/v2/bot/user/${idline}/richmenu/richmenu-6476ee09c89c11eb1ce1c15fd4a6016c`,
    headers: {
      Authorization: `Bearer {cxcH8hzWaWG6MOXpGByIes9ojXisQnlj5qMrRmRr2iv2I0eZru2eqfeyyhCizzHPMFvxR6HnHpOqEa4LddBMdvLoCSHKX6osxxQ9dyrpyGzbiInR1ac7aPFRVt4evi2yG+S3H1GUWzcWu2Bml59ffQdB04t89/1O/w1cDnyilFU=}`
    },
    json: true
  }
  );
 


  } else 
   {
    return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: event.replyToken,
      messages: [
        {
         type: 'text',
         text: '🤖กรุณาสมัครสมาชิกก่อนนะคะ🤖'
        }
    ]
    })
  });
   }
  });
}
 else if (event.message.text === 'Coming Soon'||event.message.text === 'previous'){
  
  return request({
    method: 'DELETE',
    uri: `https://api.line.me/v2/bot/user/${idline}/richmenu`,
    headers: {
      Authorization: `Bearer {cxcH8hzWaWG6MOXpGByIes9ojXisQnlj5qMrRmRr2iv2I0eZru2eqfeyyhCizzHPMFvxR6HnHpOqEa4LddBMdvLoCSHKX6osxxQ9dyrpyGzbiInR1ac7aPFRVt4evi2yG+S3H1GUWzcWu2Bml59ffQdB04t89/1O/w1cDnyilFU=}`
    },
    json: true
  })
}

else if (event.message.text==='วิธีการใช้งาน'){
   return client.replyMessage(event.replyToken, howTo);
}


 else if (event.message.text==='โปรโมชั่นสมาชิก')
  {
    return client.replyMessage(event.replyToken, proreg);
  }

   else if (event.message.text==='โปรโมชั่น')
  {
    return client.replyMessage(event.replyToken, proreg);
  }
   else if (event.message.text==='สมัครสมาชิก')
  {
  return client.replyMessage(event.replyToken, regis);
 /* return request({
    method: 'POST',
    uri: `https://api.line.me/v2/bot/user/${idline}/richmenu`,
    headers: {
      Authorization: `Bearer {cxcH8hzWaWG6MOXpGByIes9ojXisQnlj5qMrRmRr2iv2I0eZru2eqfeyyhCizzHPMFvxR6HnHpOqEa4LddBMdvLoCSHKX6osxxQ9dyrpyGzbiInR1ac7aPFRVt4evi2yG+S3H1GUWzcWu2Bml59ffQdB04t89/1O/w1cDnyilFU=}`
    },
    json: true
  })*/
  }

  
  else if (event.message === 'text'){
  return client.replyMessage(event.replyToken, test);
  }
 else 
  {
    return client.replyMessage(event.replyToken, test);
  }

  
};


const proreg = [

         {
                "type":"text",
                "text":"📲 สไลด์เพื่อดูโปรโมชั่นเพิ่มเติม 📲"
        },

{
          type: "template",
          altText: "📲 โปรโมชั่นมาแรงส์ 📲",
          template: {
            type: "carousel",
            imageAspectRatio: "square",
            imageSize: "contain",
            columns: [

            {
                thumbnailImageUrl: "https://niki999.com/joker515/logo.gif",
                imageBackgroundColor: "#030600",
                title: "\t\t👑 www.joker515.com 👑",
                text: "💯  ฝาก-ถอน อัติโนมัติ \n💯  โปรโมชั่นเยอะ จัดเต็ม\n💯  เกมส์เพียบ ลองเลย 🔥",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://liff.line.me/1654945360-4wdOYZLl"
          }
                ]
              },
              {
                thumbnailImageUrl: "https://niki999.com/joker515/proreg/3.1.jpg",
                imageBackgroundColor: "#030600",
                title: "\t\t💎 ฝากครั้งแรกรับเพิ่ม 50 % 💎",
                text: "✅  รับโบนัสสูงสุด 1000\n✅  ทำยอด 10 เท่า 🤩\n✅  สล๊อตเท่านั้น",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://liff.line.me/1654945360-4wdOYZLl"
          }
                ]
              },
               {
                thumbnailImageUrl: "https://niki999.com/joker515/proreg/1.jpg",
                imageBackgroundColor: "#030600",
                title: "\t\t💞 แทงถูกผิด 💞",
                text: "🔥  ติดต่อกัน 10 ครั้ง\n🔥  รับเงินคืนทันที (ยอดที่น้อยที่สุด)\n🔥  คาสิโนสดเท่านั้น",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://liff.line.me/1654945360-4wdOYZLl"
          }
                ]
              },
                {
                thumbnailImageUrl: "https://niki999.com/joker515/proreg/2.jpg",
                imageBackgroundColor: "#030600",
                title: "\t\t✨ ฝากขั้นต่ำ 100 บาท ✨",
                text: "🥳  รับโบนัสไปเลย 10 %\n🥳  รับโบนัสไม่เกิน 1000 บาท\n🥳  สล๊อตเท่านั้น",
               
                actions: [
                 
                    {
                    type: "uri",
                    label: "รับโปรโมชั่น",
                   uri: "https://liff.line.me/1654945360-4wdOYZLl"
          }
                ]
              }
                
            

            ]
          }
}

];





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
                thumbnailImageUrl: "https://niki999.com/joker515/555.gif",
                imageBackgroundColor: "#030600",
                title: "\t\t💞 ค่ายเกมส์ที่ไม่ควรพลาด 💞",
                text: "✅ ภาพสวย เล่นเพลิน\n✅ แตกง่ายโบนัสเพียบ 🤩\n✅ จ่ายจริงต้อง ♚JOKER515♚",
               
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                   uri: "https://liff.line.me/1654945360-pvEnqeP2"
                  },
                    {
                    type: "uri",
                    label: " ติดต่อแอดมิน ",
                   uri: "https://lin.ee/9oLGCNP"
          }
                ]
              },
              {
                thumbnailImageUrl: "https://niki999.com/joker515/4.1.jpg",
                title: "🆓 สมัครตอนนี้รับฟรี 🆓",
                text: "✔️ สมัครวันนี้ เพียงแค่แชร์ลงกลุ่ม\n✔️ รับไปเลย 100 เครดิต\n✔️ แจกจริงไม่ได้โม้",
                  imageBackgroundColor: "#000000",
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                    uri: "https://liff.line.me/1654945360-pvEnqeP2"
                  },
           {
                    type: "uri",
                    label: "  ติดต่อแอดมิน ",
                   uri: "https://lin.ee/9oLGCNP"
          }
                ]
              },
               {
                thumbnailImageUrl: "https://niki999.com/joker515/2.jpg",
                imageBackgroundColor: "#030600",
                title: "🎰 สล๊อตออนไลน์ 🎰",
                text: "🔥 เกมส์เพียบ รวมหลายค่าย\n🔥 Niki, Joker, SA, EVO\n🔥 เยอะสะใจแน่นอน",
                
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                    uri: "https://liff.line.me/1654945360-pvEnqeP2"
                  },
           {
                    type: "uri",
                    label: "  ติดต่อแอดมิน ",
                   uri: "https://lin.ee/9oLGCNP"
          }
                ]
              },
               {
                thumbnailImageUrl: "https://niki999.com/joker515/3.jpg",
                imageBackgroundColor: "#030600",
                title: "🐟 ยิงปลาก็มีนะจ๊ะ 🐟",
                text: "💸 เล่นง่าย & เล่นเพลิน\n💸 แตกง่าย จ่ายไว\n💸 ปลอดภัย มั่นใจได้แน่นอน",
                
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                    uri: "https://liff.line.me/1654945360-pvEnqeP2"
                  },
           {
                    type: "uri",
                    label: "  ติดต่อแอดมิน ",
                   uri: "https://lin.ee/9oLGCNP"
          }
                ]
              },
                {
                thumbnailImageUrl: "https://niki999.com/joker515/1.jpg",
                imageBackgroundColor: "#030600",
                title: "🃏 บาคาร่าออนไลน์ 🃏",
                text: "♦️ SA SEXY GAMING\n♦️ รวบรวมมาไว้ที่นี่\n♦️ มีแอดมินคอยดูแล 24 ชม.",
                
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                    uri: "https://liff.line.me/1654945360-pvEnqeP2"
                  },
           {
                    type: "uri",
                    label: "  ติดต่อแอดมิน ",
                   uri: "https://lin.ee/9oLGCNP"
          }
                ]
              }




            ]
          }
}

];

const follow = [

     


{
  "type": "flex",
  "altText": "🌟 JOKER515 ยินดีต้อนรับค่ะ 🌟",
  "contents": {
    "type": "bubble",
    "direction": "ltr",
    "header": {
      "type": "box",
      "layout": "vertical",
      "spacing": "none",
      "contents": [
        {
          "type": "text",
          "text": "🌟 ยินดีต้อนรับเข้าสู่ 🌟",
          "align": "center",
          "weight": "bold",
          "size": "lg",
          "color": "#000000"
        }
      ]
    },
    "hero": {
      "type": "image",
      "url": "https://www.niki999.com/joker515/logopure.jpg",
      "size": "full",
      "aspectRatio": "1.51:1",
      "aspectMode": "fit"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": " 🤩  ลูกค้าสามารถ ใช้บริการต่างๆ",
          "size": "md",
          "margin" : "lg",
          "align": "start",
          "weight": "regular",
          "color": "#141313"
        },
        {
          "type": "text",
          "text": " 🤩  ผ่านหน้า Rich Menu ได้เลยค่ะ",
          "size": "md",
          "margin" : "lg",
          "weight": "regular",
          "color": "#010101"
        },
        {
          "type": "text",  
          "margin" : "lg",
          "text": " 🤩  กดปุ่มเพื่อดูวิธีการใช้งาน",
          "size": "md",
          "weight": "regular",
          "color": "#050404"
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "horizontal",
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "วิธีการใช้",
            "text": "วิธีการใช้งาน"
          },
          "color": "#3FBD38",
          "margin": "xl",
          "style": "primary"
        }
      ]
    }
  }
},
    {
                "type":"text",
                "text":"🔥เช็คโปรโมชั่นได้ที่ Rich Menu 🔥"
        }, 

{
          type: "template",
          altText: "โปรโมชั่นมาแรงส์ ",
          template: {
            type: "carousel",
            imageAspectRatio: "square",
            imageSize: "contain",
            columns: [
              {
                thumbnailImageUrl: "https://niki999.com/joker515/555.gif",
                imageBackgroundColor: "#030600",
                title: "\t\t💞 ค่ายเกมส์ที่ไม่ควรพลาด 💞",
                text: "✅ ภาพสวย เล่นเพลิน\n✅ แตกง่ายโบนัสเพียบ 🤩\n✅ จ่ายจริงต้อง ♚JOKER515♚",
               
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                   uri: "https://liff.line.me/1654945360-pvEnqeP2"
                  },
                    {
                    type: "uri",
                    label: " ติดต่อแอดมิน ",
                   uri: "https://lin.ee/9oLGCNP"
          }
                ]
              },
              {
                thumbnailImageUrl: "https://niki999.com/joker515/4.1.jpg",
                title: "🆓 สมัครตอนนี้รับฟรี 🆓",
                text: "✔️ สมัครวันนี้ เพียงแค่แชร์ลงกลุ่ม\n✔️ รับไปเลย 100 เครดิต\n✔️ แจกจริงไม่ได้โม้",
                  imageBackgroundColor: "#000000",
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                    uri: "https://liff.line.me/1654945360-pvEnqeP2"
                  },
           {
                    type: "uri",
                    label: "  ติดต่อแอดมิน ",
                   uri: "https://lin.ee/9oLGCNP"
          }
                ]
              },
               {
                thumbnailImageUrl: "https://niki999.com/joker515/2.jpg",
                imageBackgroundColor: "#030600",
                title: "🎰 สล๊อตออนไลน์ 🎰",
                text: "🔥 เกมส์เพียบ รวมหลายค่าย\n🔥 Niki, Joker, SA, EVO\n🔥 เยอะสะใจแน่นอน",
                
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                    uri: "https://liff.line.me/1654945360-pvEnqeP2"
                  },
           {
                    type: "uri",
                    label: "  ติดต่อแอดมิน ",
                   uri: "https://lin.ee/9oLGCNP"
          }
                ]
              },
               {
                thumbnailImageUrl: "https://niki999.com/joker515/3.jpg",
                imageBackgroundColor: "#030600",
                title: "🐟 ยิงปลาก็มีนะจ๊ะ 🐟",
                text: "💸 เล่นง่าย & เล่นเพลิน\n💸 แตกง่าย จ่ายไว\n💸 ปลอดภัย มั่นใจได้แน่นอน",
                
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                    uri: "https://liff.line.me/1654945360-pvEnqeP2"
                  },
           {
                    type: "uri",
                    label: "  ติดต่อแอดมิน ",
                   uri: "https://lin.ee/9oLGCNP"
          }
                ]
              },
                {
                thumbnailImageUrl: "https://niki999.com/joker515/1.jpg",
                imageBackgroundColor: "#030600",
                title: "🃏 บาคาร่าออนไลน์ 🃏",
                text: "♦️ SA SEXY GAMING\n♦️ รวบรวมมาไว้ที่นี่\n♦️ มีแอดมินคอยดูแล 24 ชม.",
                
                actions: [
                  {
                    type: "uri",
                    label: " สมัครสมาชิก ",
                    uri: "https://liff.line.me/1654945360-pvEnqeP2"
                  },
           {
                    type: "uri",
                    label: "  ติดต่อแอดมิน ",
                   uri: "https://member.joker515.com/"
          }
                ]
              }




            ]
          }
},





];

  const replyUnknow = [
{
  "type": "flex",
  "altText": "🤖  ฉันเป็นโปรแกรมตอบอัติโนมัติ  🤖",
  "contents": {
    "type": "bubble",
    "direction": "ltr",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "image",
          "url": "https://niki999.com/joker515/555.gif",
          "align": "end",
          "gravity": "center",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "fit",
          "backgroundColor": "#FFFEFE"
        },
        {
          "type": "text",
          "text": "🤖  ฉันเป็นโปรแกรมตอบอัติโนมัติ  🤖",
          "margin": "md",
          "size": "md",
          "align": "center",
          "weight": "bold",
          "color": "#FF0000"
        }
      ]
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": " 📲  ต้องการติดต่อ แอดมิน",
          "margin": "md",
          "align": "start",
          "gravity": "center",
          "weight": "regular",
          "color": "#000000"
        },
        {
          "type": "text",
          "text": " 📲  แจ้งปัญหา หรือ รับโปรโมชั่น",
          "margin": "md",
          "align": "start",
          "weight": "regular",
          "color": "#000000"
        },
        {
          "type": "text",
          "text": " 📲  กดปุ่มด้านล่างได้เลยค่ะ",
          "margin": "md",
          "align": "start",
          "gravity": "center",
          "weight": "regular",
          "color": "#000000"
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "horizontal",
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "uri",
            "label": "คลิ๊กเลย",
            "uri": "https://lin.ee/9oLGCNP"
          },
          "color": "#48C741",
          "margin": "lg",
          "style": "primary",
          "gravity": "center"
        }
      ]
    }
  }
}
  ];






   const howTo = 
   [
  {
  "type": "imagemap",
  "baseUrl": "https://niki999.com/joker515/howto.jpg?q=g54", //ใส่ param ?xxx เพื่อให้สามารถแสดงผลแบบ 1 รูปได้ หากไม่ใส่จะไม่สามารถ render รูปภาพได้
  "altText": "🔴 วิธีการใช้งาน",
  "baseSize": {
    "width": 1040,
    "height": 1040
  },
  "actions": []
}


  ];
     const forReg = 
   [
  {
  "type": "imagemap",
  "baseUrl": "https://niki999.com/joker515/forreg.jpg?q=00d5", //ใส่ param ?xxx เพื่อให้สามารถแสดงผลแบบ 1 รูปได้ หากไม่ใส่จะไม่สามารถ render รูปภาพได้
  "altText": "🔴 ขอบคุณที่สมัครนะคะ",
  "baseSize": {
    "width": 1040,
    "height": 1040
  },
  "actions": []
}


  ];
    const test = 
   [
  {
  "type": "template",
  "altText": "🤖 ฉันเป็นบอท ตอบกลับอัตโนมัติ 🤖",
  "template": {
    "type": "buttons",
    imageAspectRatio: "square",
    imageSize: "contain",

    "actions": [
      {
        "type": "uri",
        "label": "ติดต่อแอดมิน",
        "uri": "https://lin.ee/9oLGCNP"
      },
      {
        "type": "uri",	
        "label": "รับโปรโมชั่น / แจ้งปัญหา",
        "uri": "https://lin.ee/9oLGCNP"
      }
    ],
    "thumbnailImageUrl": "https://niki999.com/joker515/logo.gif",
    "text": "🤖 ฉันเป็นบอท ตอบกลับอัตโนมัติ 🤖"
  }
}];


const regis = 
   [

   

{
  "type": "text",
  "text": "\n             ❌ คำเตือน ❌\n\n\n🚧  การสมัครเพื่อเข้าสู่ระบบผ่าน Line\n\n\n🚧  จะต้อง Login กับ Line ที่ต้องการจะเชื่อมกับบัญชีในการสมัคร\n\n\n⛔️  หากท่าน Login กับ Line ที่ไม่ใช่ของท่านเองในการสมัคร\n\n\n⛔️  ทางเราจะไม่รับผิดชอบใดๆทั้งสิ้น หากเกิดปัญหาตามมา\n\n\nกดยอมรับเพื่อ ดำเนินการต่อ\n\n"
},

   
   {
  "type": "template",
  "altText": "ยอมรับข้อตกลง",
  "template": {
    "type": "confirm",
    "actions": [
      {
        "type": "uri",
        "label": "ยอมรับ",
        "uri": "https://liff.line.me/1654945360-pvEnqeP2"
      },
      {
      "type": "uri",
        "label": "ไม่ยอมรับ",
        "uri": "https://liff.line.me/1654945360-L5aOKE8V"
      }
    ],
    "text": "⚠️ ยอมรับข้อตกลง หรือไม่?"
  }
}];

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});