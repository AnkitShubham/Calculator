function clearScreen(){
    document.getElementById("output").value = "";
}

function display(input){
    document.getElementById("output").value += input;
}

function calculate(){
    var que = document.getElementById("output").value;
    var ans = eval(que);
    document.getElementById("output").value = ans;
}