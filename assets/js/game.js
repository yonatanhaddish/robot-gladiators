var playerName= window.prompt("What is your robot's name");
var playerHealth= 100;
var playerAttack= 10;
var playerMoney= 10;

console.log(playerName, playerHealth, playerAttack);

var enemyNames= ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth= 50;
var enemyAttack= 12;


var fight= function(enemyName) {
    while(enemyHealth>0 && playerHealth>0) {
        var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose." );

     if (promptFight==="SKIP" || promptFight==="skip") {
        var confirmSkip= window.confirm("Are you sure you would like to quit?");
        
        if (confirmSkip){
             window.alert( playerName + " has decided to skip this fight with "+ enemyName);
            playerMoney= playerMoney-10;
            console.log("playerMoney", playerMoney);
            break;
        }
        else {
            fight();
            }   
    }    

    else if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth= enemyHealth-playerAttack;
        console.log(playerName + " attacked " + enemyName +"." + enemyName + " has now " + enemyHealth + " health remaining ")

        if (enemyHealth <=0){
            window.alert(enemyName+ " had died! ");
            playerMoney= playerMoney + 20;
            break;
        }
        else {
            window.alert(enemyName + " still has "+ enemyHealth + " health left.");
        }
    
        playerHealth= playerHealth-enemyAttack;
        console.log(enemyName + " attacked " + playerName + "." + playerName + " has now " + playerHealth + " health remaining")
    
        if (playerHealth <=0){
            window.alert(playerName+ " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has "+ playerHealth + " health left.");
        }
    }

    else window.alert("You need to choose a valid option. Try again !")
    }
    
       
}


for (var i= 0; i<enemyNames.length; i++) {
    if (playerHealth >0) {
        window.alert("Welcome to Robot Gladiators! Round "+ (i+1));
        console.log("You are now fighting with " + enemyNames[i]);
    var pickedEnemyName= enemyNames[i];
    enemyHealth= 50;
    fight(pickedEnemyName);
    }
    
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}