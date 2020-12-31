
function body_index() :void {

    let hight = parseInt((document.getElementById("hight") as HTMLInputElement).value);
    let weight = parseInt((document.getElementById("weight") as HTMLInputElement).value);
    
    hight = Math.pow((hight / 100), 2);

    let mass = Math.floor(weight / hight);
    document.getElementById("result").innerHTML = mass.toString();
    // return mass;
}

function clearData() :void{
    (document.getElementById("hight") as HTMLInputElement).value = "";
    (document.getElementById("weight") as HTMLInputElement).value = "";
    (document.getElementById("result") as HTMLInputElement).innerHTML = "0";
}