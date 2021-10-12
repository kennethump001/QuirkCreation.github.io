function generate(){
    var x = Math.floor(Math.random()*5);
    var y = Math.floor(Math.random()*3);

    if(x==1 && y<=1){
        document.getElementById("Result").innerHTML = document.getElementById("Father").value + " carbon copy";
    }
    else if(x==1 && y==2){
        document.getElementById("Result").innerHTML = document.getElementById("Father").value + " enhanced";
    }
    else if(x==2 && y==1){
        document.getElementById("Result").innerHTML = document.getElementById("Mother").value + " carbon copy";
    }
    else if(x==2 && y==2){
        document.getElementById("Result").innerHTML = document.getElementById("Mother").value + " Enhanced";
    }
    else if(x==3){
        document.getElementById("Result").innerHTML = "Hybride";
    }
    else{
        document.getElementById("Result").innerHTML = "Mutation";
    }
}