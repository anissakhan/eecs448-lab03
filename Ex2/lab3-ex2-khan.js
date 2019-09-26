/* Anissa Khan
EECS448 Lab 3 Ex2
9/23/19 */

//FileName: lab3-ex2-khan.js

let images=new Array(5);
images[0]="IMG_4000.jpg";
images[1]="IMG_5388.jpg";
images[2]="IMG_5047.jpg";
images[3]="IMG_0572.JPG";
images[4]="IMG_0509.JPG";

let buttonCount=0;
let buttonNext=document.querySelector("#buttonNext");
buttonNext.addEventListener("click", () => {

if(buttonCount<images.length-1)
{
    buttonCount=buttonCount+1;
}
else
{
    buttonCount=0;
}
nextImage(buttonCount);
})

let buttonPrev=document.querySelector("#buttonPrev");
buttonPrev.addEventListener("click", () => {

if(buttonCount>0)
{
    buttonCount=buttonCount-1;
}
else
{
    buttonCount=(images.length)-1;
}
nextImage(buttonCount);

})

function nextImage (i) {
        document.getElementById("image1").src=images[i];
}


