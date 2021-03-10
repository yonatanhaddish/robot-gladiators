var playerName= window.prompt("What is your robot's name");
var playerHealth= 100;
var playerAttack= 10;
var playerMoney= 10;

console.log(playerName, playerHealth, playerAttack);

var enemyNames= ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth= Math.floor(Math.random()*21)+41;
var enemyAttack= 12;

var randomNumber= function() {
    var value= Math.floor(Math.random()*21)+40;
    return value;
}


var fight= function(enemyName) {
    while(enemyHealth>0 && playerHealth>0) {
        var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose." );

     if (promptFight==="SKIP" || promptFight==="skip") {
        var confirmSkip= window.confirm("Are you sure you would like to quit?");
        
        if (confirmSkip){
            window.alert( playerName + " has decided to skip this fight with");
            playerMoney= Math.max(0, playerMoney-10);
            console.log("playerMoney", playerMoney);
            break;
        }
        else {
            fight();
            }   
    }    

    else if (promptFight === "fight" || promptFight === "FIGHT") {

        var damage= randomNumber(playerAttack-3, playerAttack);
        enemyHealth= Math.max(0, enemyHealth-damage);

        console.log(playerName + " attacked " + enemyName +"." + enemyName + " has now " + enemyHealth + " health remaining ")

        if (enemyHealth <=0){
            window.alert(enemyName+ " had died! ");
            playerMoney= playerMoney + 20;
            break;
        }
        else {
            window.alert(enemyName + " still has "+ enemyHealth + " health left.");
        }

        var damage= randomNumber(enemyAttack-3,enemyAttack);
        playerHealth= Math.max(0, playerHealth-damage);

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
    
       
};


var startGame= function() {

    playerHealth= 100;
    playerAttack= 10;
    playerMoney= 10;

    for (var i= 0; i<enemyNames.length; i++) {
        if (playerHealth >0) {
            window.alert("Welcome to Robot Gladiators! Round "+ (i+1));
            console.log("You are now fighting with " + enemyNames[i]);
        var pickedEnemyName= enemyNames[i];
        enemyHealth= 50;
        fight(pickedEnemyName);
        if (playerHealth>0 && i<enemyNames.length-1 ) {
            var storeConfirm= window.confirm("The fight is over, visit the store before the next round?");
            
            if(storeConfirm){
                shop();
            }
        }
        }
        
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }

    endGame();
    };
   
};

var endGame= function() {
    window.alert("The game has now ended. Let's see how you did! ")

    if (playerHealth> 0){
        window.alert("Great job, you've survived the game! You have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

var playAgainConfirm= window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
     startGame();
    }
    else {
        window.alert("Thankyou for playing Robot Gladiators! Come back soon!");
    }
};

var shop= function(){
    var shopOptionPrompt= window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch(shopOptionPrompt) {
        
        case "refill":
        case "REFILL":
            if (playerMoney>=7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth= playerHealth + 20;
                playerMoney= playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
            
        
        case "upgrade":
        case "UPGRADE":
            if (playerMoney>=7){
                window.alert("Upgrading player's attack by 6 for 7 dollars");
                playerAttack= playerAttack + 6;
                playerMoney= playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
            

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store");
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }

    
};
startGame();







