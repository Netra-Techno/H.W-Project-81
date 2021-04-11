canvas=document.getElementById("My_Canvas");
ctx=canvas.getContext("2d");
color-"red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 50, 0, 2 * Math.PI);
ctx.stroke();
canvas.addEventListner("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("colour").value;
    console.log(colour);
    mouseX = e.clientX - canvas.offSetLeft;
    mouseY = e.clientY - canvas.offSetTop;
    console.log("X =" + mouseX + "Y =" + mouseY);
    circle(mouseX, mouseY);
}

function circle() {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
    ctx.stroke();
}