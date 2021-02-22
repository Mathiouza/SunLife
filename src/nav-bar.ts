

let buttons:HTMLCollection = document.getElementById("buttons").children;

buttons.item(0).addEventListener("click", () => {location.href="./Accueil.php"});
buttons.item(1).addEventListener("click", () => {location.href="./BD.php"});