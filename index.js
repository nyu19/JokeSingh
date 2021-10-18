'use strict'

// const req =
// import axios from 'axios';

// const axios = require('axios');
function getJson(URL){
    let data;
    let targetText = document.getElementById("joke-text")
    let x = document.getElementById("category")
    console.log(URL)
    axios.get(URL)
    .then((response)=>{
        x.textContent = response.data.category + " [" + response.data.type + "]" 

        if (response.data.error){
            targetText.textContent = "RIP Error!"
        }
        console.log(response.data)
        if (response.data.type==="single")
            targetText.textContent = response.data.joke
        else if(response.data.type==="twopart")
        targetText.textContent = response.data.setup + "\n" + response.data.delivery
    }).catch((err)=>{
        console.error(err)
    })
    console.log("----> "+ data)
    return data;
}


function jokeRequested(){
    // targetText.textContent = "Hello"
    let base_url="https://v2.jokeapi.dev/joke/";
    
    let name = document.getElementsByName('jokes-any');
    let index = 0
    for(let i = 0; i < name.length; i++){
        if (name[i].checked){
            index = i
        }
    }
    let end_str = ""
    let type_sel = ""
    let d = document;
    switch(index){
        case 0:
            
            if (d.getElementById("one").checked && d.getElementById("two").checked ){
                type_sel = "?blacklistFlags=nsfw,racist,sexist,explicit"
            }
            else if(d.getElementById("one").checked && d.getElementById("two").checked ){
                type_sel = "?blacklistFlags=nsfw,racist,sexist,explicit"
            }
            else if(d.getElementById("two").checked ){
                type_sel = "?blacklistFlags=nsfw,racist,sexist,explicit&type=twopart"
                // alert("Two Part")
            }
            else if(d.getElementById("one").checked ){
                type_sel = "?blacklistFlags=nsfw,racist,sexist,explicit&type=single"
            }
            getJson(base_url+"Any" + type_sel)
            break;
        case 1:
                    
            if (d.getElementById("one").checked && d.getElementById("two").checked ){
                type_sel = "?blacklistFlags=nsfw,racist,sexist,explicit"
            }
            else if(d.getElementById("one").checked && d.getElementById("two").checked ){
                type_sel = "?blacklistFlags=nsfw,racist,sexist,explicit"
            }
            else if(d.getElementById("two").checked ){
                type_sel = "?blacklistFlags=nsfw,racist,sexist,explicit&type=twopart"
                // alert("Two Part")
            }
            else if(d.getElementById("one").checked ){
                type_sel = "?blacklistFlags=nsfw,racist,sexist,explicit&type=single"
            }

            if(d.getElementById('joke-prog').checked){
                end_str += "Programming,"
            }
            if(d.getElementById('joke-misc').checked){
                end_str += "Miscellaneous,"
            }
            if(d.getElementById('joke-dark').checked){
                end_str += "Dark,"
            }
            if(d.getElementById('joke-puns').checked){
                end_str += "Pun,"
            }
            if(d.getElementById('joke-spooky').checked){
                end_str += "Spooky,"
            }
            if(d.getElementById('joke-chri').checked){
                end_str += "Christmas,"
            }
            
            end_str = end_str.substring(0,end_str.length-1);
            // alert(end_str)
            getJson(base_url + end_str + type_sel)
            // alert(base_url + end_str + type_sel)
            break;
            // document.getElementById("output").textContent = resp.data.joke

        return 0;
    }
}

function enabler(){
    document.getElementById("joke-prog").disabled=false
    document.getElementById("joke-misc").disabled=false
    document.getElementById("joke-dark").disabled=false
    document.getElementById("joke-puns").disabled=false
    document.getElementById("joke-spooky").disabled=false
    document.getElementById("joke-chri").disabled=false
}

function disabler(){
    document.getElementById("joke-prog").disabled=true
    document.getElementById("joke-misc").disabled=true
    document.getElementById("joke-dark").disabled=true
    document.getElementById("joke-puns").disabled=true
    document.getElementById("joke-spooky").disabled=true
    document.getElementById("joke-chri").disabled=true

    document.getElementById("joke-prog").checked=false
    document.getElementById("joke-misc").checked=false
    document.getElementById("joke-dark").checked=false
    document.getElementById("joke-puns").checked=false
    document.getElementById("joke-spooky").checked=false
    document.getElementById("joke-chri").checked=false
}