/* Anissa Khan
EECS448 Lab 3 Ex4
9/23/19 */

//FileName: lab3-ex4-khan.js


    function rgbFunc(r, g, b){
        return "rgb("+r+","+g+","+b+")";
    }

    let bordRedLocal=document.querySelector("#BordRed");
    let bordGreenLocal=document.querySelector("#BordGreen");
    let bordBlueLocal=document.querySelector("#BordBlue");

    let backRedLocal=document.querySelector("#BackRed");
    let backGreenLocal=document.querySelector("#BackGreen");
    let backBlueLocal=document.querySelector("#BackBlue");

    let dummyTextLocal=document.getElementById("dummyText");

    let UpdateButton=document.querySelector("#update");

    UpdateButton.addEventListener("click", () => {

        if(isNaN(bordRedLocal.value) || isNaN(bordGreenLocal.value) || isNaN(bordBlueLocal.value) || isNaN(backRedLocal.value) || isNaN(backGreenLocal.value) || isNaN(backBlueLocal.value))
        {
            alert("Please enter numbers only.");
        }

        else
        {
            let redBord=parseFloat(bordRedLocal.value);
            let greenBord=parseFloat(bordGreenLocal.value);
            let blueBord=parseFloat(bordBlueLocal.value);
            //dummyTextLocal.style.borderColor="rgb(22, 234, 23)";
    
            dummyTextLocal.style.borderColor=rgbFunc(redBord, greenBord, blueBord);
    
            let redBack=parseFloat(backRedLocal.value);
            let greenBack=parseFloat(backGreenLocal.value);
            let blueBack=parseFloat(backBlueLocal.value);
            dummyTextLocal.style.backgroundColor=rgbFunc(redBack, greenBack, blueBack);
            
        }

        
    })
