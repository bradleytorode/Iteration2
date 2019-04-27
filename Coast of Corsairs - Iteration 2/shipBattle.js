//Instantiating the variables for the Player and Enemy's Health.
var enemyHP = 500;
var playerHP = 500;
//Enemies Attacks
enemyAttack = [cannonfire, weakShot, powderKeg, powerball]
//Player Array, showing that it is the players move.
playerMove = 0;
//Variable for pirates gamble.
//Variable for pirates gamble.
var gamble = 250;

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
                enemyHP = enemyHP - 40; // critical hit on enemy
            }
            else {
                enemyHP = enemyHP - 20; // no critical hit
            }
            if (enemyHP < 0) { enemyHP = 0 } //Enemy dies.
            document.getElementById('enemyHP').innerHTML = enemyHP; // update hp
            if (enemyHP == 0) {
                document.getElementById('message').innerHTML = "Ye sunk the bilge rats!"; // update message
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
                enemyHP = enemyHP - 50; // critical hit on enemy
            }
            else {
                enemyHP = enemyHP - 30; // no critical hit
            }
            if (enemyHP < 0) { enemyHP = 0 } //Enemy dies.
            document.getElementById('enemyHP').innerHTML = enemyHP; // update hp
            if (enemyHP == 0) {
                document.getElementById('message').innerHTML = "Ye sunk the bilge rats!"; // update message
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
                enemyHP = enemyHP - 90; // critical hit on enemy
            }
            else {
                enemyHP = enemyHP - 60; // no critical hit
            }
            if (enemyHP < 0) { enemyHP = 0 } //Enemy dies.
            document.getElementById('enemyHP').innerHTML = enemyHP; // update hp
            if (enemyHP == 0) {
                document.getElementById('message').innerHTML = "Ye sunk the bilge rats!"; // update message
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
            document.getElementById('message').innerHTML = "Wait! That be volatile! ";
            playerHP = playerHP - gamble;
            if (playerHP < 0) { playerHP = 0 } //player dies
            document.getElementById('playerHP').innerHTML = playerHP; // update hp
            if (playerHP == 0) {
                document.getElementById('message').innerHTML = "You lost the Gamble!"; // update message
            }
            console.log(missRate)
        }
        else {
            document.getElementById('message').innerHTML = " Wow! That was a mighty shot there ladie! "; // attack
            enemyHP = enemyHP - gamble; // no critical hit
        }
        if (enemyHP < 0) { enemyHP = 0 } //Enemy dies.
        document.getElementById('enemyHP').innerHTML = enemyHP; // update hp
        if (enemyHP == 0) {
            document.getElementById('message').innerHTML = "Ye sunk the bilge rats!"; // update message
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
        console.log("missed")
    }
    else {
        document.getElementById('message').innerHTML = "We be hit for considerable damage!"; // Enemy attacking player
        var critical = Math.floor((Math.random() * 10) + 1); // critical hits
        if (critical == 4) {
            playerHP = playerHP - 40; // Enemy Critical Strike on the player
        }
        else {
            playerHP = playerHP - 20; // no enemy critical hit
            console.log("hit")
        }
        if (playerHP < 0) { playerHP = 0 } //Player Dies
        document.getElementById('playerHP').innerHTML = playerHP; // update hp
        if (playerHP == 0) {
            document.getElementById('message').innerHTML = "We are going down! ABANDON SHIP!"; // Player message update, showing they have died
        }
    }

}

function weakShot() {
    var missRate = Math.floor((Math.random() * 10) + 1); // miss rate
    if (missRate == 1) {
        document.getElementById('message').innerHTML = " The enemy missed! Ya har har. Lets show them how we do it! ";
        console.log("missed")
    }
    else {
        document.getElementById('message').innerHTML = "Barely a dent in our ship!"; // Enemy attacking player
        var critical = Math.floor((Math.random() * 10) + 1); // critical hits
        if (critical == 7) {
            playerHP = playerHP - 25; 
        }
        else {
            playerHP = playerHP - 10; // no enemy critical hit
            console.log("hit")
        }
        if (playerHP < 0) { playerHP = 0 } //Player Dies
        document.getElementById('playerHP').innerHTML = playerHP; // update hp
        if (playerHP == 0) {
            document.getElementById('message').innerHTML = "We are going down! ABANDON SHIP!"; // Player message update, showing they have died
        }
    }

}

function powderKeg() {
    var missRate = Math.floor((Math.random() * 10) + 1); // miss rate
    if (missRate == 1) {
        document.getElementById('message').innerHTML = " The enemy missed! Ya har har. Lets show them how we do it! ";
        console.log("missed")
    }
    else {
        document.getElementById('message').innerHTML = "They be using powder kegs!"; // Enemy attacking player
        var critical = Math.floor((Math.random() * 10) + 1); // critical hits
        if (critical == 6) {
            playerHP = playerHP - 60; // critical hit on enemy
        }
        else {
            playerHP = playerHP - 30; // no enemy critical hit
            console.log("hit")
        }
        if (playerHP < 0) { playerHP = 0 } //Player Dies
        document.getElementById('playerHP').innerHTML = playerHP; // update hp
        if (playerHP == 0) {
            document.getElementById('message').innerHTML = "We are going down! ABANDON SHIP!"; // Player message update, showing they have died
        }
    }

}

function powerball() {
    var missRate = Math.floor((Math.random() * 10) + 1); // miss rate
    if (missRate <= 4) {
        document.getElementById('message').innerHTML = " The enemy missed! Ya har har. Lets show them how we do it! ";
        console.log("missed")
    }
    else {
        document.getElementById('message').innerHTML = "Another hit like that, we be heading to Davy Jones' Locker!"; // Enemy attacking player
        var critical = Math.floor((Math.random() * 10) + 1); // critical hits
        if (critical == 7) {
            playerHP = playerHP - 80; // Enemy Critical Strike on the player
        }
        else {
            playerHP = playerHP - 50; // no enemy critical hit
            console.log("hit")
        }
        if (playerHP < 0) { playerHP = 0 } //Player Dies
        document.getElementById('playerHP').innerHTML = playerHP; // update hp
        if (playerHP == 0) {
            document.getElementById('message').innerHTML = "We are going down! ABANDON SHIP!"; // Player message update, showing they have died
        }
    }

}

function enemyMove() {
    if (playerMove === 1 && enemyHP != 0) { // Is it the players move or the enemies move
        var movePicker = Math.floor(Math.random() * 4) ; // Choose the enemies move at random
        console.log(movePicker);
        console.log("Works");
        enemyAttack[movePicker].call(); // call attack from array
        console.log(enemyAttack);
        playerMove = 0; // update to players move
}
}

