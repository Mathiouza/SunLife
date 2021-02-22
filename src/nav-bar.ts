

let buttons:HTMLCollection = document.getElementById("buttons").children;

buttons.item(0).addEventListener("click", () => {location.href="./accueil.php"});
buttons.item(1).addEventListener("click", () => {location.href="./BD.php"});