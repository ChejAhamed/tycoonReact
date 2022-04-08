const playerss = {
  du: 2,
  z: 3,
};
console.log(playerss);

/* eslint-disable no-param-reassign */
// const currentPosition = 0;

// testing functionality for rotating the stage for players turns
// function rotateTheStage() {
//   //delete current
//   const boardPositions = [0, 90, 180, 270, 360];
//   //when it hits 360, it resets to 0

//   //exchanging styles
//   document
//     .querySelector('#gameBoard')
//     .classList.replace(
//       `stage${boardPositions[currentPosition]}`,
//       `stage${boardPositions[currentPosition + 1]}`
//     );

//   currentPosition += 1;
//   if (currentPosition === 5) {
//     document
//       .querySelector('#gameBoard')
//       .classList.replace(
//         `stage${boardPositions[currentPosition]}`,
//         `stage${boardPositions[0]}`
//       );
//     console.log('currentPosition is ' + currentPosition);
//     currentPosition = 0;
//     console.log('currentPosition reset to ' + currentPosition);
//   }
// }

// document
//   .querySelector('#rotateStageButton')
//   .addEventListener('click', rotateTheStage);
let playerNumber;
const playersLost = [];
const logoShip = 'https://cdn.imgbin.com/23/13/17/imgbin-monopoly-brik-board-game-hasbro-spaceship-DU2tuutaCF0HgpGXAgRbfKKSv.jpg';
const players = {
  human: [{
    id: 1,
    name: 'Mark',
    piece: 'shoe',
    currentSpace: 1,
    logo: logoShip,
    isBankrupt: false,
    money: 1500,
    properties: [],
    propertyNameList: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,
    movePlayer(newLocation) {
      // add login to handle number over 40

      players.currentSpace += newLocation;
    },

    makeAChoice() {
      if (Math.random() * 1 < 0.5) {
        return true;
      }
      return false;
    },

    buyProperty(thisProperty) {
      if (this.money >= thisProperty.value) {
        // pay for the property
        this.money -= thisProperty.value;
        // set purchased value to true
        thisProperty.purchased = true;
        // set this player as owner
        thisProperty.ownedBy = playerNumber;
        console.log(playerNumber);
        // push this into a list of properties owned by this player
        this.properties.push(thisProperty);
        // console.log(this.name+" just bought "+ thisProperty.name +"for $"+ thisProperty.value);
        // console.log(`${this.name} now owns ${thisProperty.name}! Enjoy!`);
      } else {
        console.log(`You can't afford ${thisProperty.name}, ${this.name}`);
      }
    },

    propertyNames() {
      for (let i = 0; i < this.properties.length; i += 1) {
        this.propertyNameList.push(this.properties[i].name);
        console.log(i);
      }
      return this.propertyNameList;
    },
  },
  {
    name: 'Sabaa',
    piece: 'Dog',
    currentSpace: 1,
    isBankrupt: false,
    money: 1500,
    properties: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,

    makeAChoice() {
      if (Math.random() * 1 < 0.5) {
        return true;
      }
      return false;
    },

    buyProperty(thisProperty) {
      if (this.money >= thisProperty.value) {
        // pay for the property
        this.money -= thisProperty.value;
        // set purchased value to true
        thisProperty.purchased = true;
        // set this player as owner
        thisProperty.ownedBy = playerNumber;
        console.log(playerNumber);
        // push this into a list of properties owned by this player
        this.properties.push(thisProperty);
        // console.log(this.name+" just bought "+ thisProperty.name +"for $"+ thisProperty.value);
        // console.log(`${this.name} now owns ${thisProperty.name}! Enjoy!`);
      } else {
        console.log(`You can't afford ${thisProperty.name}, ${this.name}`);
      }
    },
  },
  {
    name: 'Fer',
    piece: 'Top Hat',
    currentSpace: 1,
    isBankrupt: false,
    money: 1500,
    properties: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,

    makeAChoice() {
      if (Math.random() * 1 < 0.5) {
        return true;
      }
      return false;
    },

    buyProperty(thisProperty) {
      if (this.money >= thisProperty.value) {
        // pay for the property
        this.money -= thisProperty.value;
        // set purchased value to true
        thisProperty.purchased = true;
        // set this player as owner
        thisProperty.ownedBy = playerNumber;
        console.log(playerNumber);
        // push this into a list of properties owned by this player
        this.properties.push(thisProperty);
        // console.log(this.name+" just bought "+ thisProperty.name +"for $"+ thisProperty.value);
        // console.log(`${this.name} now owns ${thisProperty.name}! Enjoy!`);
      } else {
        console.log(`You can't afford ${thisProperty.name}, ${this.name}`);
      }
    },
  }],
  ai: [{
    name: 'Dennis',
    piece: 'shoe',
    currentSpace: 1,
    logo: logoShip,
    isBankrupt: false,
    money: 1500,
    properties: [],
    propertyNameList: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,
    movePlayer(newLocation) {
      // add login to handle number over 40

      players.currentSpace += newLocation;
    },

    makeAChoice() {
      if (Math.random() * 1 < 0.5) {
        return true;
      }
      return false;
    },

    buyProperty(thisProperty) {
      if (this.money >= thisProperty.value) {
        // pay for the property
        this.money -= thisProperty.value;
        // set purchased value to true
        thisProperty.purchased = true;
        // set this player as owner
        thisProperty.ownedBy = playerNumber;
        console.log(playerNumber);
        // push this into a list of properties owned by this player
        this.properties.push(thisProperty);
        // console.log(this.name+" just bought "+ thisProperty.name +"for $"+ thisProperty.value);
        // console.log(`${this.name} now owns ${thisProperty.name}! Enjoy!`);
      } else {
        console.log(`You can't afford ${thisProperty.name}, ${this.name}`);
      }
    },

    propertyNames() {
      for (let i = 0; i < this.properties.length; i += 1) {
        this.propertyNameList.push(this.properties[i].name);
        console.log(i);
      }
      return this.propertyNameList;
    },
  },
  {
    name: 'Amanda',
    piece: 'Dog',
    currentSpace: 1,
    isBankrupt: false,
    money: 1500,
    properties: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,

    makeAChoice() {
      if (Math.random() * 1 < 0.5) {
        return true;
      }
      return false;
    },

    buyProperty(thisProperty) {
      if (this.money >= thisProperty.value) {
        // pay for the property
        this.money -= thisProperty.value;
        // set purchased value to true
        thisProperty.purchased = true;
        // set this player as owner
        thisProperty.ownedBy = playerNumber;
        console.log(playerNumber);
        // push this into a list of properties owned by this player
        this.properties.push(thisProperty);
        // console.log(this.name+" just bought "+ thisProperty.name +"for $"+ thisProperty.value);
        // console.log(`${this.name} now owns ${thisProperty.name}! Enjoy!`);
      } else {
        console.log(`You can't afford ${thisProperty.name}, ${this.name}`);
      }
    },
  },
  {
    name: 'Snickers',
    piece: 'Top Hat',
    currentSpace: 1,
    isBankrupt: false,
    money: 1500,
    properties: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,

    makeAChoice() {
      if (Math.random() * 1 < 0.5) {
        return true;
      }
      return false;
    },

    buyProperty(thisProperty) {
      if (this.money >= thisProperty.value) {
        // pay for the property
        this.money -= thisProperty.value;
        // set purchased value to true
        thisProperty.purchased = true;
        // set this player as owner
        thisProperty.ownedBy = playerNumber;
        console.log(playerNumber);
        // push this into a list of properties owned by this player
        this.properties.push(thisProperty);
        // console.log(this.name+" just bought "+ thisProperty.name +"for $"+ thisProperty.value);
        // console.log(`${this.name} now owns ${thisProperty.name}! Enjoy!`);
      } else {
        console.log(`You can't afford ${thisProperty.name}, ${this.name}`);
      }
    },
  }],
};
function youLose(player) {
  console.log(player);
  playersLost.push(player[playerNumber]);
  player.isBankrupt = true;
  player.doubles = false;
  console.log(`${player.name}, you are broke. You lose.`);
  // players.splice(playerNumber, 1);
  console.log(players);
}
const theBoard = [
  {
    name: 'Jail',

    spaceAction(player) {
      // mising logic
      player.money -= 50;
      console.log('It\'s $50 to get out of jail, or you can roll doubles.');
    },
  },
  {
    name: 'GO!',

    spaceAction(player) {
      player.money += 200;
      console.log(`${player.name} collected $200!`);
    },
  },
  {
    name: 'Mediterranean Avenue',
    propType: 'brown',
    purchased: false,
    ownedBy: undefined,
    value: 60,
    rent: 2,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        playersLost.push(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );

        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Community Chest',
    propType: false,

    spaceAction(player) {
      console.log('Pick a card!');
      const randoCard = Math.random() * 3;
      if (randoCard <= 1) {
        // advance to GO!
        player.currentspace = 1;
        console.log('Advance to GO!');
      } else if (randoCard < 1 && randoCard <= 2) {
        // pay doctor's fee
        console.log("Doctor's Fee. Pay $50");
        player.money -= 50;
      } else if (randoCard < 2) {
        // inherit $100
        console.log('You inherit $100');
        player.money += 100;
      }
    },
  },
  {
    name: 'Baltic Avenue',
    propType: 'brown',
    purchased: false,
    ownedBy: undefined,
    value: 60,
    rent: 4,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Income Tax',
    propType: 'tax',

    spaceAction(player) {
      if (Math.floor(player.money * 0.1) > 200) {
        player.money -= 200;
      } else {
        player.money = Math.floor(player.money * 0.9);
      }
      console.log('Thanks for paying your taxes.');
    },
  },
  {
    name: 'Reading Railroad',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 200,
    rent: 25,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Oriental Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 100,
    rent: 6,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Chance',
    propType: 'card',

    spaceAction() {
      console.log('Pick a card!');
    },
  },
  {
    name: 'Vermont Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 100,
    rent: 6,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Connecticut Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 100,
    rent: 8,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Just Visiting',
    propType: 'visiting',

    spaceAction(player) {
      console.log(
        `${player.name} looks through the cold bars to the empty cell.`,
      );
    },
  },

  // LEFT SIDE OF BOARD
  {
    name: 'St. Charles Place',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 140,
    rent: 10,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Electric Company',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 150,
    rent: 20,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'States Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 140,
    rent: 10,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Virginia Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 150,
    rent: 12,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Pennsylvania Railroad',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 200,
    rent: 10,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'St. James Place',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 180,
    rent: 14,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Community Chest',
    propType: 'card',

    spaceAction() {
      console.log('Pick a card!');
    },
  },
  {
    name: 'Tennessee Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 180,
    rent: 14,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'New York',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 200,
    rent: 16,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Free Parking!',
    propType: 'parking',

    spaceAction() {
      console.log("Enjoy the free parking. It won't be free forever.");
    },
  },
  // TOP ROW
  {
    name: 'Kentucky Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 200,
    rent: 18,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Chance',
    propType: 'card',

    spaceAction() {
      console.log('Pick a card!');
    },
  },
  {
    name: 'Indiana Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 220,
    rent: 18,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'illinois Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 240,
    rent: 20,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'B & O Railroad',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 200,
    rent: 20,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Atlantic Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 260,
    rent: 22,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Water Works',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 260,
    rent: 20,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Ventnor Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 150,
    rent: 22,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Marvin Gardens',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 280,
    rent: 24,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Go to jail!',
    propType: 'goToJail',

    spaceAction(player) {
      player.currentSpace = 0;
      console.log('Go directly to Jail! Do not pass GO! Don not collect $200');
      player.inJail = true;
    },
  },

  // RIGHT ROW
  {
    name: 'Pacific Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 300,
    rent: 26,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Community Chest',
    propType: 'card',

    spaceAction() {
      console.log('Pick a card!');
    },
  },
  {
    name: 'North Carolina Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 300,
    rent: 26,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Pennsylvania Avenue',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 320,
    rent: 28,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Short Line Railroad',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 200,
    rent: 25,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Chance',
    propType: 'card',

    spaceAction() {
      console.log('Pick a card!');
    },
  },
  {
    name: 'Park Place',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 350,
    rent: 35,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
  {
    name: 'Luxury Tax',
    propType: 'tax',

    spaceAction(player) {
      console.log(`Pay your luxury tax, ${player.name}!`);
      player.money -= 75;
      if (player.money <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
      }
    },
  },
  {
    name: 'Boardwalk',
    propType: 'property',
    purchased: false,
    ownedBy: undefined,
    value: 400,
    rent: 50,

    // PROPERTY METHOD
    spaceAction(player) {
      // for properties

      /** * If you can't afford rent */
      if (this.purchased && player.money - this.rent <= 0) {
        youLose(player);
        console.log(
          "you should lose here, but there's a loop that doesn't care.",
        );
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        console.log(`THIS PROPERTY IS OWNED BY ${players[this.ownedBy].name}`);
        /** *subtract the rent from player */
        player.money -= this.rent;

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;
        console.log(
          `${player.name} had to pay $${this.rent} in rent to ${
            players[this.ownedBy].name
          } for ${this.name}`,
        );
        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber].currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
];

console.log(players);
export default { players, theBoard };
