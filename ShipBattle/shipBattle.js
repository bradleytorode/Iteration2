//Instantiating the variables for the Player and Enemy's Health.
var enemyHP = 100;
var playerHP = 100;
//Enemies Attacks
enemyAttack = [cannonfire, weakShot, powderKeg, powerball]
//Player Array, showing that it is the players move.
playerMove = 0;

//User Moves
function cannonball() {
    if (playerMove == 0 && playerHP != 0) {
        var missRate = Math.floor((Math.random() * 10) + 1); // miss rate
        if (missRate == 1) {
            document.getElementById('message').innerHTML = " Blow me down! How did ye miss! ";
        }
        else {
            document.getElementById('message').innerHTML = " You hit the Scurvy dogs! "; // attack
            var critical = Math.floor((Math.random() * 10) + 1); // critical
            if (critical == 4) {
                for (var x = 0; x < 2; x++) {
                    enemyHP = enemyHP - 20; // critical strike succeeded
                    console.log("crit")
                }
            }
            else {
                enemyHP = enemyHP - 20; // no critical hit
            }
            if (enemyHP < 0) { enemyHP = 0 } //Enemy dies.
            document.getElementById('enemyHP').innerHTML = enemyHP; // update hp
            if (enemyHP == 0) {
                document.getElementById('message').innerHTML = "Ye sunk the bilge rats!" // update message
            }
        }
        //wait();
        //playerMove = 1; // updates player move to create the enemy turn.
    }
}

