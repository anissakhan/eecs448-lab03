/* Anissa Khan
KU ID: 2567413
EECS448 Lab 3 Ex1
9/23/19 */

//FileName: lab3-ex1-khan.js

function alertFunc () {

    let pw1Local=document.getElementById("pw1").value
    let pw2Local=document.getElementById("pw2").value
    
    if(pw1Local!==pw2Local)
    {
        alert("Error: Passwords don't match.");
    }
    else if(pw1Local.length<8)
    {
        alert("Error: Your password must be at least 8 characters.");
    }
    else
    {
        alert("Success! Passwords Match!");
    }
    
}


//extra code
/*
document.addEventListener("DOMContentLoaded", () => {
    console.log("started...");
    let pw1Local=0;
    let pw2Local=0;

    pw1Local=document.querySelector("#pw1");
    pw2Local=document.querySelector("#pw2");

    pw2Local.addEventListener("input", () => {
        if(pw1Local.value==pw2Local.value)
        {
            document.querySelector("#result").innerText="Passwords match";
        }
        else
        {
            document.querySelector("#result").innerText="Passwords don't match";
        }
    })
})*/

//below code doesn't work
/*document.addEventListener("DOMContentLoaded", () => {
    console.log("started...");
    let pw1Local=0;
    let pw2Local=0;

    pw1Local=document.querySelector("#pw1");
    pw2Local=document.querySelector("#pw2");

    document.getElementById("button1").addEventListener("click", () => {
        if(pw1Local.value!==pw2Local.value)
        {
            alert("Error: Passwords don't match.");
        }
        else
        {
            alert("Success! Passwords Match!");
        }
    })*/