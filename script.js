let output = document.getElementById("small-screen");
let bigoutput = document.getElementById("big-screen")

let calculate = (number) =>{
    bigoutput.value+=number;
}

function clr(){
    bigoutput.value = "";
    output.value = "";
}



let result=()=>{
    try{
        output.value=eval(bigoutput.value)
    }
    catch(err){
        alert("Please enter the valid input")
    }
}

function del(){
    bigoutput.value=bigoutput.value.slice(0,-1)
}
