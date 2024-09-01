const number=document.getElementById("input");

function append(input){
 number.value+=input;
}

function reset(){
 number.value="";
}

function calculate(){
    try{
     number.value=eval(number.value);
    }
    catch(error){
     number.value="error";
    }
}