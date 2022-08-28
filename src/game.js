import { fromEvent, interval, timer } from "rxjs";
import {
  map,
  filter,
  distinctUntilChanged,
  scan,
  withLatestFrom,
  startWith,
} from "rxjs/operators";

const canvas = document.getElementById("game-board");

const ctx = canvas.getContext("2d");

class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let speed = 2;


let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;

const snakeParts = [];
let tailLength = 2;

let appleX = 5;
let appleY = 5;

function game() {
  clearScreen();
  checkAppleCollision();
  drawApple();
  drawSnake();
  displayScore(tailLength);
}

const DIRECTIONS = {
  37: { xStep: -1, yStep: 0 },
  39: { xStep: 1, yStep: 0 },
  38: { xStep: 0, yStep: -1 },
  40: { xStep: 0, yStep: 1 },
};

function checkAppleCollision() {
  if (appleX === headX && appleY === headY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
  }
}

function drawApple() {
  ctx.fillStyle = "red";
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function drawSnake() {
  ctx.fillStyle = "green";
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }
  snakeParts.push(new SnakePart(headX, headY));
  if (snakeParts.length > tailLength) {
    snakeParts.shift();
  }
  ctx.fillStyle = "orange";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function changeSnakePosition(coord) {
  headX += coord.xStep;
  headY += coord.yStep;
  return { headX, headY };
}

function nextDirection(prev, next) {
  let isOpposite = (prev, next) => {
    return next.xStep === prev.xStep * -1 || next.yStep === prev.yStep * -1;
  };
  if (isOpposite(prev, next)) {
    return prev;
  }
  return next;
}

function main() {
  const keydown$ = fromEvent(document, "keydown").pipe(
    startWith(game),
    filter(
      ({ keyCode }) =>
        keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40
    ),
    map(({ keyCode }) => DIRECTIONS[keyCode]),
    scan(nextDirection),
    distinctUntilChanged()
  );

  const time$ = interval(1000).pipe(
    withLatestFrom(keydown$, (_, dir) => dir),
    map(changeSnakePosition)
  );
  const ticks$ = time$.subscribe(() => {
    game();
    gameOver(ticks$);
  });
}

function displayScore(length) {
  ctx.fillStyle = "white";
  ctx.fillText(`Score:${length - 2}`, 20, 20);
}

function gameOver(ticks$) {
  if (
    headX * tileCount === canvas.width ||
    headY * tileCount === canvas.height ||
    headX === 0 ||
    headY === 0
  ) {
    ticks$.unsubscribe();
    ctx.fillStyle = "white";
    ctx.fillText("Game over", 200, 200);

    resetVal();
    setTimeout(()=>alert('Punch any arrow key to continue'),1000)
    
    main();
  }
}

function resetVal() {
  headX = 10;
  headY = 10;
  snakeParts.length = 0;
  tailLength = 2;
  appleX = 5;
  appleY = 5;
}

clearScreen();
drawSnake();
main();