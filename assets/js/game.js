var fight= function() {
    window.alert("Welcome to Robot Gladiators!");

    enemyHealth= enemyHealth-playerAttack;
    console.log(playerName + " attacked " + enemyName +"." + enemyName + " has now " + enemyHealth + " health remaining ")

    if (enemyHealth <=0){
        window.alert(enemyName+ " had died! ");
    }
    else {
        window.alert(enemyName + " still has "+ enemyHealth + " health left.");
    }

    playerHealth= playerHealth-enemyAttack;
    console.log(enemyName + " attacked " + playerName + "." + playerName + " has now " + playerHealth + " health remaining")

    if (playerHealth <=0){
        window.alert(playerName+ " had died! ");
    }
    else {
        window.alert(playerName + " still has "+ playerHealth + " health left.");
}
};


var playerName= window.prompt("What is your robot's name");
var playerHealth= 100;
var playerAttack= 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName= "Roborto";
var enemyHealth= 50;
var enemyAttack= 12;

console.log(enemyName, enemyHealth, enemyAttack);



fight()