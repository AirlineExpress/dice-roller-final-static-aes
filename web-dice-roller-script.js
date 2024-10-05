async function diceRoller() {

    /* This will assign the dice to their slots and then roll their value*/
    /* This will also try to fetch the value from the node server and show error if it can not*/
    try {
        const website = await fetch('https://dice-roller-nodejs-aes-cmcjh6fccbchefae.centralus-01.azurewebsites.net/rolldice');
        const data = await website.json();
        const dice1 = document.getElementById("dice1");
        const dice2 = document.getElementById("dice2");
        const dice3 = document.getElementById("dice3");
        const dice4 = document.getElementById("dice4");
        const dice5 = document.getElementById("dice5");
        dice1.value = data.dice[4];
        dice2.value = data.dice[3];
        dice3.value = data.dice[2];
        dice4.value = data.dice[1];
        dice5.value = data.dice[0];
    }
    catch (error) {
        console.error('Error', error);
    }
}
