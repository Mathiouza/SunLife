

let buttons:HTMLCollection = document.getElementById("buttons").children;

buttons.item(0).addEventListener("click", () => {location.href="./accueil.php"});
buttons.item(1).addEventListener("click", () => {location.href="./BD.php"});
buttons.item(2).addEventListener("click", () => {location.href="./persos.php"});
buttons.item(3).addEventListener("click", () => {location.href="./artworks.php"});
buttons.item(4).addEventListener("click", () => {location.href="./apropos.php"});
buttons.item(5).addEventListener("click", () => {location.href="./plus.php"});