
var child,school,flag;
var backgroundImg, happyImg, sadImg, schoolImg, flagImg;

function preload(){
  backgroundImg = loadImage("background.jpg");
  happyImg  = loadImage("happy emoji.png");
  sadImg = loadImage("sad emoji.png");
  schoolImg = loadImage("school.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  school = createSprite(displayWidth/2,50,10,10);
  school.addImage(schoolImg);


  child = createSprite(displayWidth/2,displayHeight/2,10,10);
  child.addImage(happyImg);
  child.scale = 0.16;

}



function draw() {
  background(backgroundImg);

  
  camera.y = child.y;
  camera.x = child.x; 

  allOldText();
  allNewText();

  if(keyDown(LEFT_ARROW)){
    child.x = child.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    child.x = child.x+2;
  }

  if(keyDown(UP_ARROW)){
    child.y = child.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    child.y = child.y+2;
  }

  if(child.x < displayWidth/2){
    child.addImage(sadImg)
  }

  if(child.x > displayWidth/2){
    child.addImage(happyImg)
  }

  
  line(displayWidth/2,-20000,displayWidth/2,displayHeight+20000)
  textSize(32);
  textFont("Georgia");
  fill(255);
  text("पुरानी शिक्षा नीति",100,50)
  text("नई शिक्षा नीति",displayWidth/2 + 250,50)
  drawSprites();
}

function allOldText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text("10 + 2 ", displayWidth/2 - 300,displayHeight/2);
  text("स्कूली शिक्षा प्रणाली", displayWidth/2 - 300,displayHeight/2 + 50);

  text("यह नीति केवल अंकों और शिक्षाविदों पर केंद्रित है", displayWidth/2 - 700,displayHeight/2 - 200);

  text("यह नीति छात्रों को अपनी भाषा में अध्ययन करने की अनुमति नहीं देती है", displayWidth/2 - 1300,displayHeight/2 - 100);
  
  text("हमें अपने किसी भी कौशल में कोई इंटर्नशिप नहीं मिल रही है", displayWidth/2 - 1000,displayHeight/2 + 200);

  text("परीक्षा सिर्फ अंग्रेजी और हिंदी में आयोजित की जाती है", displayWidth/2 - 1000,displayHeight/2 + 70);

  text("शिक्षक को केवल एक छात्र को रैंक करने का अधिकार है", displayWidth/2 -700, displayHeight/2 +300);

  text("छात्रों को केवल अकादमिक प्रदर्शन के आधार पर स्थान दिया गया है", displayWidth/2 - 1500,displayHeight/2 - 270);

  text("छात्रों को कोडिंग, पॉटरी आदि जैसे कोई कौशल नहीं सिखाए जाते हैं..", displayWidth/2 - 1200,displayHeight/2  + 400);

  text("बोर्ड परीक्षाएं सालाना आयोजित की जाती हैं", displayWidth/2 - 1400,displayHeight/2 + 10);

  text("कोई सांस्कृतिक अध्ययन प्रदान नहीं किया जाता है", displayWidth/2 - 1400,displayHeight/2 +300);

  text("पाठ्यक्रम पूरा करने के बाद ही योग्यता प्रदान की जाती है", displayWidth/2 - 1600,displayHeight/2 + 140);

  text("कॉलेज प्रवेश के लिए 12 अंक महत्वपूर्ण हैं", displayWidth/2 - 1800,displayHeight/2 - 200);

  text("फीस प्रतिबंधित नहीं है", displayWidth/2 - 1400,displayHeight/2 + 480);

  text("छात्र विषयों तक सीमित हैं", displayWidth/2 - 1750,displayHeight/2 + 350);
  
}

function allNewText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text(" 5 + 3 + 3 + 4 ", displayWidth/2 + 50,displayHeight/2);
  text("स्कूली शिक्षा प्रणाली", displayWidth/2 + 50,displayHeight/2 + 50);

  text("यह नीति केवल अंकों और शिक्षाविदों पर ध्यान केंद्रित नहीं करती है, यह कौशल और गैर-शैक्षणिक गतिविधियों पर भी ध्यान केंद्रित करती है", displayWidth/2 + 200,displayHeight/2 - 250);

  text("छात्र अब अपनी क्षेत्रीय भाषा में अध्ययन कर सकते हैं", displayWidth/2 + 300,displayHeight/2 - 100);
  
  text("हम अपने स्कूल-उम्र में अपने कौशल में इंटर्नशिप प्राप्त कर सकते हैं", displayWidth/2 + 500,displayHeight/2 + 200);

  text("अब परीक्षाएँ क्षेत्रीय भाषाओं में उपलब्ध हैं", displayWidth/2 + 250,displayHeight/2 + 120);

  text("शिक्षक और छात्र एक बच्चे को रैंक करते हैं", displayWidth/2 +250, displayHeight/2 +300);

  text("छात्रों को शैक्षणिक प्रदर्शन और रचनात्मकता के आधार पर भी रैंक किया जाता है", displayWidth/2 + 1000,displayHeight/2 - 310);

  text("छात्रों को कोडिंग, पॉटरी आदि जैसे कई कौशल सिखाए जाते हैं..", displayWidth/2 + 700,displayHeight/2  + 400);

  text("अब बोर्ड परीक्षा दो सेमेस्टर में आयोजित की जाती है", displayWidth/2 + 900,displayHeight/2 + 10);

  text("भारतीय संस्कृति को स्कूल में पढ़ाया जाता है", displayWidth/2 + 900,displayHeight/2 +300);

  text("योग्यता पूर्ण पाठ्यक्रम के बाद प्रदान की जाती है और पाठ्यक्रमों के बीच में प्रमाण पत्र और डिप्लोमा प्रदान किए जाते हैं", displayWidth/2 + 1100,displayHeight/2 + 140);

  text("12 के मार्क्स कॉलेज प्रवेश के लिए महत्वपूर्ण नहीं हैं, छात्र प्रवेश परीक्षा दे सकते हैं", displayWidth/2 + 800,displayHeight/2 - 200);

  text("फीस प्रतिबंधित है", displayWidth/2 + 300,displayHeight/2 + 400);

  text("छात्र अपनी इच्छानुसार कोई भी विषय ले सकते हैं", displayWidth/2 + 1250,displayHeight/2 + 350);
  
}