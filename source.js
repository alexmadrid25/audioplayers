function preload() {
  soundFormats("mp3");
  c1 = loadSound("sounds/c1.mp3");
  c2 = loadSound("sounds/c2.mp3");
  c3 = loadSound("sounds/c3.mp3");
}
var pos = 0;

function setup() {

  cnv = createCanvas(100, 100);
  amplitude = new p5.Amplitude();    

  array = [c1, c2, c3];
  play = createButton("Play");
  stop = createButton("Stop");
  pause = createButton("Pause");
  next = createButton("Next");
  prev = createButton("Prev");
  rand = createButton("Rand");
  loop = createButton("Loop");

  play.mousePressed(plays);
  stop.mousePressed(stops);
  pause.mousePressed(pauses);
  next.mousePressed(nexts);
  prev.mousePressed(prevs);
  rand.mousePressed(rands);
  loop.mousePressed(loops);
}


function draw() {
  background(0);
  fill(255);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 200);
  ellipse(width / 2, height / 2, size, size);
}


function plays() {
  array[pos].play();
}
function stops() {
  array[pos].stop();
}
function pauses() {
  array[pos].pause();
}
function nexts() {
  array[pos].stop();
  pos = (pos + 1) % 3;
  array[pos].play();

}
function prevs() {
  array[pos].stop();
  pos = pos - 1;
  if (pos == -1) {
      pos = pos + 3;

  }
  array[pos].play();
}
function rands() {
  array[pos].rand(array);
}
function loops() {
  array[pos].loop(true);
}
