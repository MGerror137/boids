import Boid from "./boid.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
let A = new Boid(100, 100);
let B = new Boid(200, 200);
let C = new Boid(300, 300);
A.draw(ctx);
B.draw(ctx);
C.draw(ctx);