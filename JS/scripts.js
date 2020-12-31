function body_index() {
    var hight = parseInt(document.getElementById("hight").value);
    var weight = parseInt(document.getElementById("weight").value);
    hight = Math.pow((hight / 100), 2);
    var mass = Math.floor(weight / hight);
    document.getElementById("result").innerHTML = mass.toString();
    // return mass;
}
function clearData() {
    document.getElementById("hight").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "0";
}
