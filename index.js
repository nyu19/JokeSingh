'use strict'

const axios = require('axios')

// function jokeRequested(){
//     let targetText = document.getElementById("output")
//     targetText.textContent = "Hello"
//     let base_url="https://v2.jokeapi.dev/joke/"
    
//     return axios.get(){

//     }
// }

function enabler(){
    console.log("pk")
    document.getElementById("joke-prog").disabled=false
    document.getElementById("joke-misc").disabled=false
    document.getElementById("joke-dark").disabled=false
    document.getElementById("joke-puns").disabled=false
    document.getElementById("joke-spooky").disabled=false
}

function disabler(){
    console.log("pk")
    document.getElementById("joke-prog").disabled=true
    document.getElementById("joke-misc").disabled=true
    document.getElementById("joke-dark").disabled=true
    document.getElementById("joke-puns").disabled=true
    document.getElementById("joke-spooky").disabled=true
}