//alert('boom!');
var assistantName = 'Ripley4';
console.log(assistantName);
document.querySelector('#state').append(assistantName +' ONLINE');
document.querySelector('#contents').append("> Good evening. It has been a while. ");

//weird
var num1= 1;
var num2 = num1--;
console.log('result num1-- ',num1, num2);

//weirder
var num1= 1;
var num2 = --num1;
console.log('result --num1 ',num1, num2);

var ripleyState = true;
// prompts
function verification(){
    var question1 = "Who are you?";
    var ans1 = prompt(question1);
    if(ans1 == 'joshua'){
        alert('Welcome Professor');
        document.querySelector('#state').replaceWith(assistantName +' ONLINE');
        document.querySelector('#contents').replaceWith("> Access Granted. How may I help you?");
    }
    else{
        alert("Sorry "+ans1+" I don't know you. Goodbye.");
        document.querySelector('#state').replaceWith(assistantName +' OFFLINE');
        document.querySelector('#contents').replaceWith("> Access Denied.");
    }
}
