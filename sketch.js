var img;
var logo;
var gondola;
var phone;
var startX = 100;
var stopX = 750;
var startY = 700;
var stopY = 153;
var x = startX;
var y = startY;
var step = 0.002;
var pct = 0.0;

function preload() {
  img = loadImage("assets/background.png");
  phone = loadImage('assets/phone.png');
  logo = loadImage("assets/logo.png");
  gondola = loadImage("assets/gondola.png");
}

function setup() {
  createCanvas(750,1334);
  background(0);
  textSize(20);
  textAlign(CENTER);
  textFont('DINOT-Black');


}

function draw() {

  image(img,0,0,width,height);
  noStroke();
  fill(77,110,163);
  console.log(mouseX);

  push();
  translate(104,170);
  scale(45 / 60.0);

  beginShape();
  vertex(333,798);
  vertex(345,768);
  vertex(369,754);
  vertex(377,744);
  vertex(378,735);
  vertex(383,718);
  vertex(388,718);
  vertex(390,713);
  vertex(395,712);
  vertex(395,703);
  vertex(405,690);
  vertex(422,700);
  vertex(452,736);
  vertex(452,748);
  vertex(463,761);
  vertex(476,762);
  vertex(505,784);
  vertex(408,831);
  endShape(CLOSE);

  beginShape();
  vertex(0,640);
  vertex(119,685);
  vertex(200,743);
  vertex(219,731);
  vertex(241,750);
  vertex(257,755);
  vertex(314,793);
  vertex(512,810);
  vertex(547,754);
  vertex(642,662);
  vertex(672,670);
  vertex(750,636);
  vertex(750,1333);
  vertex(0,1333);
  endShape(CLOSE);

  fill(55,79,114);
  beginShape();
  vertex(0,758);
  vertex(57,740);
  vertex(83,758);
  vertex(127,740);
  vertex(162,765);
  vertex(226,749);
  vertex(249,769);
  vertex(291,758);
  vertex(370,802);
  vertex(750,910);
  vertex(750,1333);
  vertex(0,1333);
  endShape(CLOSE);

  fill(42,60,89);
  beginShape();
  vertex(0,838);
  vertex(71,796);
  vertex(152,829);
  vertex(226,829);
  vertex(273,810);
  vertex(299,828);
  vertex(429,783);
  vertex(492,758);
  vertex(554,722);
  vertex(594,749);
  vertex(638,731);
  vertex(750,762);
  vertex(750,1333);
  vertex(0,1333);
  endShape(CLOSE);

  fill(29,41,63);
  beginShape();
  vertex(0,880);
  vertex(73,921);
  vertex(135,895);
  vertex(211,901);
  vertex(266,880);
  vertex(314,886);
  vertex(409,859);
  vertex(474,817);
  vertex(555,786);
  vertex(604,797);
  vertex(646,783);
  vertex(670,786);
  vertex(750,794);
  vertex(750,1333);
  vertex(0,1333);
  endShape(CLOSE);
  pop();

  image(logo,230,1075,280,41);
  stroke(0);
  line(100,700,750,153);

  if (pct < 1.0) {
    x = startX + ((stopX-startX)* pct);
    y = startY + ((stopY-startY)* pct);
    pct += step;
  }
  image(gondola,x-70,y+5,145/1.5,270/1.5);
  fill(0);
  text(6,x-20,y+167);
  image(phone,0,0,width,height);
  fill(255);
  noStroke();
  rect(0,0,width,10);
  rect(0,height-10,width,10);
  rect(width-10,0,10,height);

}
