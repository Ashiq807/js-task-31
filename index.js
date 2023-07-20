document.getElementById("container").innerHTML = "<button id='buy' class='btn btn-success' onclick='myFunction()'>buy</button>";
function myFunction(){
    document.getElementById("container").innerHTML += "<p>Thank you for buying!</p>";
}