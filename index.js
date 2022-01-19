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


 if (event.type === 'follow')
 {

   client.replyMessage(event.replyToken,follow);
    
  } 
 
   if (event.message.type !== 'text') //กรณ๊อื่น ที่ส่งมาไม่ได้เป็น text เช่น sticker image audio location
   {
return client.replyMessage(event.replyToken, missun);
    }
 
  else if  (event.message.text === "test")
  {
  return client.replyMessage(event.replyToken, test);
  }

else if  (event.message.text.indexOf("สิ่งของ") !== -1||
  event.message.text.indexOf("บริจาคของ") !== -1||event.message.text.indexOf("บริจาคสิ่ง") !== -1||event.message.text.indexOf("ของใช้") !== -1
  ||event.message.text.indexOf("บริจาคใช้") !== -1)
{

   return client.replyMessage(event.replyToken, item);
}
    
  // Section เงื่อนไขการตอบกลับ

else if (event.message.text.indexOf("บริจาคเสื้อผ้า") !== -1||event.message.text.indexOf("เสื้อผ้า") !== -1)
  {
    return client.replyMessage(event.replyToken, cloth);
  }

  else if (event.message.text.indexOf("บริจาคเลือด") !== -1||event.message.text.indexOf("ให้เลือด") !== -1||
    event.message.text.indexOf("บริจาคโลหิต") !== -1||event.message.text.indexOf("เลือด") !== -1||event.message.text.indexOf("โลหิต")!== -1)
  {
    return client.replyMessage(event.replyToken, blood);
  }

 else if (event.message.text.indexOf("บริจาคอุปกรณ์ทางการแพทย์") !== -1||event.message.text.indexOf("เครื่องมือทางการแพทย์") !== -1
  ||event.message.text.indexOf("อุปกรณ์ทางการแพทย์") !== -1||event.message.text.indexOf("ทางการแพทย์") !== -1||event.message.text.indexOf("การแพทย์") !== -1
  ||event.message.text.indexOf("อุปกรณ์แพทย์") !== -1||event.message.text.indexOf("เตรื่องมือแพทย์") !== -1)
  {
    return client.replyMessage(event.replyToken, tooldoc);
  }

  else if (event.message.text.indexOf("บริจาคอาหาร") !== -1||event.message.text.indexOf("อาหาร") !== -1||
    event.message.text.indexOf("ของกิน") !== -1||event.message.text.indexOf("เครื่องดื่ม") !== -1)
  {
    return client.replyMessage(event.replyToken, food);
  }
   else if (event.message.text.indexOf("เงิน") !== -1||event.message.text.indexOf("บริจาคเงิน") !== -1)
  {
    return client.replyMessage(event.replyToken, money);
  }
  else if (event.message.text.indexOf("เครื่องใช้") !== -1)
  {
    return client.replyMessage(event.replyToken, used);
  }

else
  {
    return client.replyMessage(event.replyToken, missun);
  }
  
};


const test = [
{
"type" : "flex",
    "altText" : "Meess",
    "contents" :{
  "type": "carousel",
  "contents": [
   {
  "type": "bubble",
  "direction": "ltr",
  "hero": {
    "type": "image",
    "url": "https://www.i-pic.info/i/UQm6111429.jpg",
    "align": "center",
    "size": "full",
    "aspectRatio": "1:1",
    "backgroundColor": "#FFFFFFFF"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "เรือนจำจังหวัดตรัง\n โทร 075582336 \n ที่อยู่ 133 ม. 11 ตำบลโคกหล่อ อ.เมืองตรัง",
        "weight": "regular",
        "size": "md",
        "color": "#000000FF",
        "align": "center",
        "wrap": true,
        "contents": []
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
          "label": "รายละเอียด",
          "uri": "https://linecorp.com"
        },
        "color": "#008CC3FF",
        "style": "primary",
        "gravity": "center"
      }
    ]
  }
 },
    {
  "type": "bubble",
  "direction": "ltr",
  "hero": {
    "type": "image",
    "url": "https://www.i-pic.info/i/UQm6111429.jpg",
    "align": "center",
    "size": "full",
    "aspectRatio": "1:1",
    "backgroundColor": "#FFFFFFFF"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "เรือนจำจังหวัดตรัง\n โทร 075582336 \n ที่อยู่ 133 ม. 11 ตำบลโคกหล่อ อ.เมืองตรัง",
        "weight": "regular",
        "size": "md",
        "color": "#000000FF",
        "align": "center",
        "wrap": true,
        "contents": []
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
          "label": "รายละเอียด",
          "uri": "https://www.facebook.com/%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%88%E0%B8%B3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-100531712073093?openExternalBrowser=1"
        },
        "color": "#008CC3FF",
        "style": "primary",
        "gravity": "center"
      }
    ]
  }
}

  ]
}
}           
]
const used = [
{
"type" : "flex",
    "altText" : "รายละเอียด",
    "contents" :{
  "type": "carousel",
  "contents": [
    {
  "type": "bubble",
  "direction": "ltr",
  "hero": {
    "type": "image",
    "url": "https://www.i-pic.info/i/UQm6111429.jpg",
    "align": "center",
    "size": "full",
    "aspectRatio": "1:1",
    "backgroundColor": "#FFFFFFFF"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "เรือนจำจังหวัดตรัง\n โทร 075582336 \n ที่อยู่ 133 ม. 11 ตำบลโคกหล่อ อ.เมืองตรัง",
        "weight": "regular",
        "size": "md",
        "color": "#000000FF",
        "align": "center",
        "wrap": true,
        "contents": []
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
          "label": "รายละเอียด",
          "uri": "https://www.facebook.com/%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%88%E0%B8%B3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-100531712073093?openExternalBrowser=1"
        },
        "color": "#008CC3FF",
        "style": "primary",
        "gravity": "center"
      }
    ]
  }
}

  ]
}
}
              
          ]
const cloth = [
{
"type" : "flex",
    "altText" : "รายละเอียด",
    "contents" :{
  "type": "carousel",
  "contents": [
    {
  "type": "bubble",
  "direction": "ltr",
  "hero": {
    "type": "image",
    "url": "https://www.i-pic.info/i/86hK111426.png",
    "align": "center",
    "size": "full",
    "aspectRatio": "1:1",
    "backgroundColor": "#FFFFFFFF"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "กาชาดจังหวัดตรัง\n โทร 075501095 \n ที่อยู่ 8 ถ.รื่นรมย์ ต.ทับเที่ยง",
        "weight": "regular",
        "size": "md",
        "color": "#000000FF",
        "align": "center",
        "wrap": true,
        "contents": []
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
          "label": "รายละเอียด",
          "uri": "https://www.facebook.com/pg/trangrc/posts?openExternalBrowser=11"
        },
        "color": "#008CC3FF",
        "style": "primary",
        "gravity": "center"
      }
    ]
  }
}

  ]
}
}
];
const tooldoc = [
 {
"type" : "flex",
    "altText" : "รายละเอียด", 
    "contents" :{
  "type": "carousel",
  "contents": [
   {
  "type": "bubble", //โรงพยาบาล
  "direction": "ltr",
  "hero": {
    "type": "image",
    "url": "https://www.i-pic.info/i/XDIT111427.jpg",
    "align": "center",
    "size": "full",
    "aspectRatio": "1:1",
    "backgroundColor": "#FFFFFFFF"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "โรงพยาบาล\n โทร 075201500\n ที่อยู่ 69 ต.ทับเที่ยง อ.เมืองตรัง",
        "weight": "regular",
        "size": "md",
        "color": "#000000FF",
        "align": "center",
        "wrap": true,
        "contents": []
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
          "label": "รายละเอียด",
          "uri": "https://www.facebook.com/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-331023247355513?openExternalBrowser=1"
        },
        "color": "#008CC3FF",
        "style": "primary",
        "gravity": "center"
      }
    ]
  }
 },
    {
  "type": "bubble", //หน่วยกู้ภัย มูลนิธิกุศลสถานตรัง
  "direction": "ltr",
  "hero": {
    "type": "image",
    "url": "https://www.i-pic.info/i/HrDI111431.jpg",
    "align": "center",
    "size": "full",
    "aspectRatio": "1:1",
    "backgroundColor": "#FFFFFFFF"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "หน่วยกู้ภัย มูลนิธิกุศลสถานตรัง\n โทร 075215554 \n ที่อยู่ 127 ถ.โรงเรียน ต.ทับเที่ยง อ.เมืองตรัง",
        "weight": "regular",
        "size": "md",
        "color": "#000000FF",
        "align": "center",
        "wrap": true,
        "contents": []
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
          "label": "รายละเอียด",
          "uri": "https://www.facebook.com/KUSOLSATHANTRANG?openExternalBrowser=1"
        },
        "color": "#008CC3FF",
        "style": "primary",
        "gravity": "center"
      }
    ]
  }
},
{
  "type": "bubble", //มูลนิธิสว่างภักดีตรังธรรมสถาน
  "direction": "ltr",
  "hero": {
    "type": "image",
    "url": "https://www.i-pic.info/i/dNKI111430.jpg",
    "align": "center",
    "size": "full",
    "aspectRatio": "1:1",
    "backgroundColor": "#FFFFFFFF"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "มูลนิธิสว่างภักดีตรังธรรมสถาน\n โทร 075820328 \n ที่อยู่ 229/23 ต. บางรัก อ.เมืองตรัง",
        "weight": "regular",
        "size": "md",
        "color": "#000000FF",
        "align": "center",
        "wrap": true,
        "contents": []
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
          "label": "รายละเอียด",
          "uri": "https://www.facebook.com/%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%99%E0%B8%B4%E0%B8%98%E0%B8%B4%E0%B8%AA%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A0%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99-102586631228919?openExternalBrowser=1"
        },
        "color": "#008CC3FF",
        "style": "primary",
        "gravity": "center"
      }
    ]
  }
}
  ]
}
}
];
const blood = [
{
"type" : "flex",
    "altText" : "รายละเอียด", 
    "contents" :{
  "type": "carousel",
  "contents": [
   {
  "type": "bubble", //โรงพยาบาล
  "direction": "ltr",
  "hero": {
    "type": "image",
    "url": "https://www.i-pic.info/i/XDIT111427.jpg",
    "align": "center",
    "size": "full",
    "aspectRatio": "1:1",
    "backgroundColor": "#FFFFFFFF"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "โรงพยาบาล\n โทร 075201500\n ที่อยู่ 69 ต.ทับเที่ยง อ.เมืองตรัง",
        "weight": "regular",
        "size": "md",
        "color": "#000000FF",
        "align": "center",
        "wrap": true,
        "contents": []
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
          "label": "รายละเอียด",
          "uri": "https://www.facebook.com/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-331023247355513?openExternalBrowser=1"
        },
        "color": "#008CC3FF",
        "style": "primary",
        "gravity": "center"
      }
    ]
  }
 },  
 {
  "type": "bubble",
  "direction": "ltr",
  "hero": {
    "type": "image",
    "url": "https://www.i-pic.info/i/86hK111426.png",
    "align": "center",
    "size": "full",
    "aspectRatio": "1:1",
    "backgroundColor": "#FFFFFFFF"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "กาชาดจังหวัดตรัง\n โทร 075501095 \n ที่อยู่ 8,ถ.รื่นรมย์\n ต.ทับเที่ยง",
        "weight": "regular",
        "size": "md",
        "color": "#000000FF",
        "align": "center",
        "wrap": true,
        "contents": []
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
          "label": "รายละเอียด",
          "uri": "https://www.facebook.com/pg/trangrc/posts?openExternalBrowser=11"
        },
        "color": "#008CC3FF",
        "style": "primary",
        "gravity": "center"
      }
    ]
  }
}
  ]
}
}
];

const food = [
{
"type" : "flex",
    "altText" : "รายละเอียด", 
    "contents" :{
  "type": "carousel",
  "contents": [
   {
  "type": "bubble", //บ้านพักคนชรา
  "direction": "ltr",
  "hero": {
    "type": "image",
    "url": "https://www.i-pic.info/i/Kmq9111425.jpg",
    "align": "center",
    "size": "full",
    "aspectRatio": "1:1",
    "backgroundColor": "#FFFFFFFF"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "บ้านพักคนชรา\n โทร 075574679\n ที่อยู่ 113 ม.2 ต.ปากแจ่ม อ.ห้วยยอด",
        "weight": "regular",
        "size": "md",
        "color": "#000000FF",
        "align": "center",
        "wrap": true,
        "contents": []
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
          "label": "รายละเอียด",
          "uri": "https://www.facebook.com/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%87%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B9%8C%E0%B8%84%E0%B8%99%E0%B8%8A%E0%B8%A3%E0%B8%B2%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-%E0%B8%AD%E0%B8%AB%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A2%E0%B8%AD%E0%B8%94-%E0%B8%88%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-107904924436991?openExternalBrowser=1", 
          "color": "#008CC3FF",
        "style": "primary",
        "gravity": "center"
      }
    ]
  }
 }
},  
 {
  "type": "bubble", //โรงพยาบาล
  "direction": "ltr",
  "hero": {
    "type": "image",
    "url": "https://www.i-pic.info/i/XDIT111427.jpg",
    "align": "center",
    "size": "full",
    "aspectRatio": "1:1",
    "backgroundColor": "#FFFFFFFF"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "โรงพยาบาล\n โทร 075201500\n ที่อยู่ 69 ต.ทับเที่ยง อ.เมืองตรัง",
        "weight": "regular",
        "size": "md",
        "color": "#000000FF",
        "align": "center",
        "wrap": true,
        "contents": []
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
          "label": "รายละเอียด",
          "uri": "https://www.facebook.com/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-331023247355513?openExternalBrowser=1",
        },
        "color": "#008CC3FF",
        "style": "primary",
        "gravity": "center"
      }
    ]
  }
 },

 {
  "type": "bubble", //สถานพินิจ
  "direction": "ltr",
  "hero": {
    "type": "image",
    "url": "https://www.i-pic.info/i/7BSx111428.jpgg",
    "align": "center",
    "size": "full",
    "aspectRatio": "1:1",
    "backgroundColor": "#FFFFFFFF"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "สถานพินิจและคุ้มครองเด็กและเยาวชน\n โทร 075571439\n ที่อยู่ 116 ม.3 ต.ทุ่งค่าย อ.ย่านตาขาว",
        "weight": "regular",
        "size": "md",
        "color": "#000000FF",
        "align": "center",
        "wrap": true,
        "contents": []
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
          "label": "รายละเอียด",
          "uri": "https://shorturl.at/hxD17?openExternalBrowser=1"
        },
        "color": "#008CC3FF",
        "style": "primary",
        "gravity": "center"
      }
    ]
  }
 }

 
  ]
}
}
];


const money = [{
          type: "template",
          altText: "รายละเอียด",
          template: {
            type: "carousel",
            imageAspectRatio: "square",
            imageSize: "contain",
            columns: [
             {
                thumbnailImageUrl: "https://www.i-pic.info/i/86hK111426.png",
                imageBackgroundColor: "#030600",
                title: "\t\t กาชาดจังหวัดตรัง ",
                text: " โทรศัพท์ 075501095 \n ที่อยู่ 8,ถนนรื่นรมย์\n ตำบลทับเที่ยง",
                actions: [
                 
                    {
                    type: "uri",
                    label: "รายละเอียดเพิ่มเติม",
                   uri: "https://www.facebook.com/pg/trangrc/posts?openExternalBrowser=1"
          }
                ]
              },
              {
                thumbnailImageUrl: "https://www.i-pic.info/i/HrDI111431.jpg",
                imageBackgroundColor: "#030600",
                title: "\t\t หน่วยกู้ภัย มูลนิธิกุศลสถานตรัง",
                text: " โทรศัพท์ 075215554 \n ที่อยู่ 127 ,ถ.โรงเรียน ต.ทับเที่ยง\n อ.เมืองตรัง",
                actions: [
                    {
                    type: "uri",
                    label: "รายละเอียดเพิ่มเติม",
                   uri: "https://www.facebook.com/KUSOLSATHANTRANG?openExternalBrowser=1"
          }
                ]
              },
                 {
                thumbnailImageUrl: "https://www.i-pic.info/i/dNKI111430.jpg",
                imageBackgroundColor: "#030600",
                title: "\t\t มูลนิธิสว่างภักดีตรังธรรมสถาน",
                text: " โทรศัพท์  075820328 \n ที่อยู่ 229/23 ต. บางรัก \n อ.เมืองตรัง",
                actions: [
                    {
                    type: "uri",
                    label: "รายละเอียดเพิ่มเติม",
                   uri: "https://www.facebook.com/%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%99%E0%B8%B4%E0%B8%98%E0%B8%B4%E0%B8%AA%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A0%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99-102586631228919?openExternalBrowser=1"
          }
                ]
              },

          {
                thumbnailImageUrl: "https://www.i-pic.info/i/7BSx111428.jpg",
                imageBackgroundColor: "#ffffff",
                title: "\t\t สถานพินิจและคุ้มครองเด็กและเยาวชน",
                text: " โทรศัพท์ 075571439\n ที่อยู่ 116 ม.3 ต.ทุ่งค่าย อ.ย่านตาขาว",
               
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
          altText: "รายละเอียด",
          template: {
            type: "carousel",
            imageAspectRatio: "square",
            imageSize: "contain",
            columns: [
             {
                thumbnailImageUrl: "https://www.i-pic.info/i/86hK111426.png",
                imageBackgroundColor: "#030600",
                title: "\t\t กาชาดจังหวัดตรัง ",
                text: " โทรศัพท์ 075501095 \n ที่อยู่ 8,ถนนรื่นรมย์\n ตำบลทับเที่ยง",
                actions: [
                 
                    {
                    type: "uri",
                    label: "รายละเอียดเพิ่มเติม",
                   uri: "https://www.facebook.com/pg/trangrc/posts?openExternalBrowser=1"
          }
                ]
              },
 
 {
                thumbnailImageUrl: "https://www.i-pic.info/i/Kmq9111425.jpg",
                imageBackgroundColor: "#030600",
                title: "\t\t สถานบ้านพักคนชรา",
                text: " โทรศัพท์ 075574679\n ที่อยู่ 113 ม.2 ต.ปากแจ่ม อ.ห้วยยอด",
                actions: [
                    {
                    type: "uri",
                    label : "รายละเอียดเพิ่มเติม",
                    uri : "https://www.facebook.com/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%87%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B9%8C%E0%B8%84%E0%B8%99%E0%B8%8A%E0%B8%A3%E0%B8%B2%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-%E0%B8%AD%E0%B8%AB%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A2%E0%B8%AD%E0%B8%94-%E0%B8%88%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-107904924436991?openExternalBrowser=1"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://www.i-pic.info/i/UQm6111429.jpg",
                imageBackgroundColor: "#030600",
                title: "\t\t เรือนจำจังหวัดตรัง",
                text: " โทรศัพท์ 075582336\n ที่อยู่ 133 ม. 11 ตำบลโคกหล่อ อ.เมืองตรัง",
               
                actions: [
                    {
                    type: "uri",
                    label: "รายละเอียดเพิ่มเติม",
                   uri: "https://www.facebook.com/%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%88%E0%B8%B3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87-100531712073093?openExternalBrowser=1"
          }
                ]
              },
          {
                thumbnailImageUrl: "https://www.i-pic.info/i/7BSx111428.jpg",
                imageBackgroundColor: "#ffffff",
                title: "\t\t สถานพินิจและคุ้มครองเด็กและเยาวชน",
                text: " โทรศัพท์ 075571439\n ที่อยู่ 116 ม.3 ต.ทุ่งค่าย อ.ย่านตาขาว",
               
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

const missun = [
{
type : "text",
text : "😢 ฉันไม่เข้าใจในสิ่งที่คุณพูด \n☝️ ลองใช้คำว่า บริจาค เงิน, สิ่งของ, เลือด, เครื่องมือแพทย์, อาหาร, ของใช้ หรือคำที่เกี่ยวข้องดูนะคะ"
}
]
// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});