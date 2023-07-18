function changeText(){
    //to do talks: this is front-end script
    let potentialText = ["Text 1","Text 2", "Text 3", "Text 4", "Text 5"];
    let randomNumber= getRandomNumber(0,potentialText.length - 1);
    let textToChangeTo=potentialText[randomNumber];
    document.getElementById("header").innerHTML = textToChangeTo;
    }
    
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }