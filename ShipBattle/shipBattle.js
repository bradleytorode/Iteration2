//Instantiating the variables for the Player and Enemy's Health.
var enemyHP = 100;
var playerHP = 100;
//Enemies Attacks
enemyAttack = [cannonfire, weakShot, powderKeg, powerball]
//Player Array, showing that it is the players move.
playerMove = 0;

//PLAYER SKILL LIST AND ABILITIES!
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
        //enemyMove();
        playerMove = 1; // updates player move to create the enemy turn.
    }
}

function heavyShot() {
    if (playerMove == 0 && playerHP != 0) {
        var missRate = Math.floor((Math.random() * 10) + 1); // miss rate
        if (missRate <= 3) {
            document.getElementById('message').innerHTML = " Blow me down! How did ye miss! ";
        }
        else {
            document.getElementById('message').innerHTML = " That be a great hit! "; // attack
            var critical = Math.floor((Math.random() * 10) + 1); // critical
            if (critical == 6) {
                for (var x = 0; x < 2; x++) {
                    enemyHP = enemyHP - 20; // critical strike succeeded
                    console.log("crit")
                }
            }
            else {
                enemyHP = enemyHP - 30; // no critical hit
            }
            if (enemyHP < 0) { enemyHP = 0 } //Enemy dies.
            document.getElementById('enemyHP').innerHTML = enemyHP; // update hp
            if (enemyHP == 0) {
                document.getElementById('message').innerHTML = "Ye sunk the bilge rats!" // update message
            }
        }
        //enemyMove();
        playerMove = 1; // updates player move to create the enemy turn.
    }
}

function explodingShot() {
    if (playerMove == 0 && playerHP != 0) {
        var missRate = Math.floor((Math.random() * 10) + 1); // miss rate
        if (missRate <= 4) {
            document.getElementById('message').innerHTML = " Blow me down! How did ye miss! ";
        }
        else {
            document.getElementById('message').innerHTML = " Ye hit there powder kegs! They be looking weak! "; // attack
            var critical = Math.floor((Math.random() * 10) + 1); // critical
            if (critical == 8) {
                for (var x = 0; x < 2; x++) {
                    enemyHP = enemyHP - 20; // critical strike succeeded
                    console.log("crit")
                }
            }
            else {
                enemyHP = enemyHP - 60; // no critical hit
            }
            if (enemyHP < 0) { enemyHP = 0 } //Enemy dies.
            document.getElementById('enemyHP').innerHTML = enemyHP; // update hp
            if (enemyHP == 0) {
                document.getElementById('message').innerHTML = "Ye sunk the bilge rats!" // update message
            }
        }
        //enemyMove();
        playerMove = 1; // updates player move to create the enemy turn.
    }
}

function piratesWager() {
    if (playerMove == 0 && playerHP != 0) {
        var missRate = Math.floor((Math.random() * 10) + 1); // miss rate
        if (missRate <= 7) {
            document.getElementById('message').innerHTML = " Blow me down! How did ye miss! ";
            playerHP = playerHP - playerHP;
            if (playerHP < 0) { playerHP = 0 } //player dies
            document.getElementById('playerHP').innerHTML = playerHP; // update hp
            if (playerHP == 0) {
                document.getElementById('message').innerHTML = "NO DONT!" // update message
            }
            console.log(missRate)
        }
        else {
            document.getElementById('message').innerHTML = " You hit the Scurvy dogs! "; // attack
            enemyHP = enemyHP - enemyHP; // no critical hit
        }
        if (enemyHP < 0) { enemyHP = 0 } //Enemy dies.
        document.getElementById('enemyHP').innerHTML = enemyHP; // update hp
        if (enemyHP == 0) {
            document.getElementById('message').innerHTML = "Ye sunk the bilge rats!" // update message
        }
        //enemyMove();
        playerMove = 1; // updates player move to create the enemy turn.
    }
}


//ENEMY SKILLS AND ABILITIES
function cannonfire() {
    var missRate = Math.floor((Math.random() * 10) + 1); // miss rate
    if (missRate <= 2) {
        document.getElementById('message').innerHTML = " The enemy missed! Ya har har. Lets show them how we do it! ";
    }
    else {
        document.getElementById('message').innerHTML = "Ye"; // Enemy attacking player
        var critical = Math.floor((Math.random() * 10) + 1); // critical hits
        if (critical == 1) {
            for (var x = 0; x < 2; x++) {
                playerHP = playerHP - 20; // Enemy Critical Strike on the player
                console.log("crit")
            }
        }
        else {
            playerHP = playerHP - 20; // no enemy critical hit
        }
        if (playerHP < 0) { playerHP = 0 } //Player Dies
        document.getElementById('enemyHP').innerHTML = playerHP; // update hp
        if (playerHP == 0) {
            document.getElementById('message').innerHTML = "We are going down! ABANDON SHIP!" // Player message update, showing they have died
        }
    }

}

function weakShot() {
    var missRate = Math.floor((Math.random() * 10) + 1); // miss rate
    if (missRate == 1) {
        document.getElementById('message').innerHTML = " The enemy missed! Ya har har. Lets show them how we do it! ";
    }
    else {
        document.getElementById('message').innerHTML = "Ye"; // Enemy attacking player
        var critical = Math.floor((Math.random() * 10) + 1); // critical hits
        if (critical == 1) {
            for (var x = 0; x < 2; x++) {
                playerHP = playerHP - 5; // Enemy Critical Strike on the player
                console.log("crit")
            }
        }
        else {
            playerHP = playerHP - 10; // no enemy critical hit
        }
        if (playerHP < 0) { playerHP = 0 } //Player Dies
        document.getElementById('enemyHP').innerHTML = playerHP; // update hp
        if (playerHP == 0) {
            document.getElementById('message').innerHTML = "We are going down! ABANDON SHIP!" // Player message update, showing they have died
        }
    }

}

function powderKeg() {
    var missRate = Math.floor((Math.random() * 10) + 1); // miss rate
    if (missRate == 1) {
        document.getElementById('message').innerHTML = " The enemy missed! Ya har har. Lets show them how we do it! ";
    }
    else {
        document.getElementById('message').innerHTML = "Ye"; // Enemy attacking player
        var critical = Math.floor((Math.random() * 10) + 1); // critical hits
        if (critical == 6) {
            for (var x = 0; x < 2; x++) {
                playerHP = playerHP - 10; // Enemy Critical Strike on the player
                console.log("crit")
            }
        }
        else {
            playerHP = playerHP - 30; // no enemy critical hit
        }
        if (playerHP < 0) { playerHP = 0 } //Player Dies
        document.getElementById('enemyHP').innerHTML = playerHP; // update hp
        if (playerHP == 0) {
            document.getElementById('message').innerHTML = "We are going down! ABANDON SHIP!" // Player message update, showing they have died
        }
    }

}

function powerball() {
    var missRate = Math.floor((Math.random() * 10) + 1); // miss rate
    if (missRate <= 4) {
        document.getElementById('message').innerHTML = " The enemy missed! Ya har har. Lets show them how we do it! ";
    }
    else {
        document.getElementById('message').innerHTML = "Ye"; // Enemy attacking player
        var critical = Math.floor((Math.random() * 10) + 1); // critical hits
        if (critical == 7) {
            for (var x = 0; x < 2; x++) {
                playerHP = playerHP - 20; // Enemy Critical Strike on the player
                console.log("crit")
            }
        }
        else {
            playerHP = playerHP - 50; // no enemy critical hit
        }
        if (playerHP < 0) { playerHP = 0 } //Player Dies
        document.getElementById('enemyHP').innerHTML = playerHP; // update hp
        if (playerHP == 0) {
            document.getElementById('message').innerHTML = "We are going down! ABANDON SHIP!" // Player message update, showing they have died
        }
    }

}


    if (playerMove == 1 && enemyHP != 0) { // Is it the players move or the enemies move
        var movePicker = Math.floor((Math.random() * 4) + 1); // Choose the enemies move at random
        enemyAttack[move]; // call attack from array
        playerMove = 0; // update to players move
   }
