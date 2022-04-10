/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
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

let playerNumber = 0;
let currentRoll = 0;
const playersLost = [];
const logoShip = 'https://cdn.imgbin.com/23/13/17/imgbin-monopoly-brik-board-game-hasbro-spaceship-DU2tuutaCF0HgpGXAgRbfKKSv.jpg';
const players = [
  {
    id: 1,
    name: 'Dennis',
    piece: 'shoe',
    logo: logoShip,
    currentSpace: 1,
    isBankrupt: false,
    money: 1500,
    properties: [],
    propertyNameList: [],
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
      if (this.money >= thisProperty?.value) {
        // pay for the property
        this.money -= thisProperty.value;
        // set purchased value to true
        thisProperty.purchased = true;
        // set this player as owner
        thisProperty.ownedBy = playerNumber;
        console.log(playerNumber);
        // push this into a list of properties owned by this player
        this.properties.push(thisProperty);
        // console.log(this.name+" just bought "+ thisProperty.name + " for $"+ thisProperty.value);
        // console.log(`${this.name} now owns ${thisProperty?.name}! Enjoy!`);
      } else {
        console.log(`You can't afford ${thisProperty?.name}, ${this?.name}`);
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
    id: 2,
    name: 'Amanda',
    piece: 'Dog',
    logo: logoShip,
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
      if (this.money >= thisProperty?.value) {
        // pay for the property
        this.money -= thisProperty.value;
        // set purchased value to true
        thisProperty.purchased = true;
        // set this player as owner
        thisProperty.ownedBy = playerNumber;
        console.log(playerNumber);
        // push this into a list of properties owned by this player
        this.properties.push(thisProperty);
        // console.log(this.name+" just bought "+ thisProperty.name + " for $"+ thisProperty.value);
        // console.log(`${this.name} now owns ${thisProperty?.name}! Enjoy!`);
      } else {
        console.log(`You can't afford ${thisProperty?.name}, ${this.name}`);
      }
    },
  },
  {
    id: 3,
    name: 'Snickers',
    piece: 'Top Hat',
    logo: logoShip,
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
      if (this.money >= thisProperty?.value) {
        // pay for the property
        console.log(thisProperty);
        this.money -= thisProperty.value;
        // set purchased value to true
        thisProperty.purchased = true;
        // set this player as owner
        thisProperty.ownedBy = playerNumber;
        console.log(playerNumber);
        // push this into a list of properties owned by this player
        this.properties.push(thisProperty);
        // console.log(this.name+" just bought "+ thisProperty.name + " for $"+ thisProperty.value);
        // console.log(`${this.name} now owns ${thisProperty?.name}! Enjoy!`);
      } else {
        console.log(`You can't afford ${thisProperty?.name}, ${this.name}`);
        console.log(thisProperty);
      }
    },
  },
];
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
        } else {
          console.log(`${player.name} declined to buy ${this.name}`);
        }
      }
    },
  },
];

/** *roll dice. Made  2 dice in case of expansion to graphics to match 2 die* */
const rollDice = () => {
  /** *counting the number of doubles player rolls in a row */
  let doubles = 0;

  /** *each die get a roll to establish doubles */
  const dieOne = Math.floor(Math.random() * 6 + 1);
  const dieTwo = Math.floor(Math.random() * 6 + 1);

  /** *if we roll a double */
  if (dieOne === dieTwo) {
    console.log(`${players[playerNumber].name} rolled double ${dieOne}'s!"`);
    players[playerNumber].doubles = true;
    /** *increase the doubles count by one */
    doubles += 1;

    /** *if we roll 3 doubles in a row, we go to jail */
    if (doubles >= 3) {
      console.log(
        `${players[playerNumber].name} rolled doubles 3 times and is going to jail!`,
      );
      players[playerNumber].currentSpace = 0;
      players[playerNumber].inJail = true;
      theBoard.spaceAction(players[playerNumber]);
    }
  } else {
    /** *If we don't roll doubles, set double to 0 */
    doubles = 0;
    players[playerNumber].doubles = false;
  }

  /** *add combined roll */
  currentRoll = dieOne + dieTwo;

  console.log(`${players[playerNumber].name} rolled a ${currentRoll}`);

  return currentRoll;
};

/** *takes result of diceRoll and moves the player* */
function movePlayer(player) {
  if (player.inJail) {
    console.log(player);
  }

  /** *if the total is bigger than the board */
  if (player.currentSpace + currentRoll > theBoard.length - 1) {
    /** *  player.currentSpace = the current player's space to  the result of
       * subtracting the playerSpace+currentRoll - theBoard length
       * This should result in the correct space number;
       */

    player.currentSpace = player.currentSpace + currentRoll - (theBoard.length - 1);
    console.log(player.currentSpace);
  } else {
    /** * just add the roll to the space */
    player.currentSpace += currentRoll;
  }
}

function whichSpace(space) {
  space.spaceAction(players[playerNumber]);
}
function playerTurn(player) {
  console.log(theBoard[players[playerNumber].currentSpace]);
  // let player = players[playerNumber];
  if (!player.inJail) {
    rollDice();
    movePlayer(player);
    whichSpace(theBoard[players[playerNumber].currentSpace]);
  } else {
    rollDice();
    player.jailRoll += 1;

    if (player.jailRoll === 4) {
      player.currentSpace = 11;
      player.money -= 50;
      console.log(
        `${player.name} has served their term in jail and paid their fine.`,
      );
      player.doubles = false;
      return;
    }

    if (player.doubles) {
      player.currentSpace = 11;
      console.log(`${player.name} rolled doubles and is out of jail.`);
      player.doubles = false;
    }
  }
}
function switchPlayer() {
  if (!players[playerNumber].doubles) {
    playerNumber += 1;
    console.log(players);
    console.log(`space ${playerNumber}`);
    if (playerNumber >= players.length) {
      playerNumber = 0;
      theBoard[players[playerNumber].currentSpace] = theBoard[players[playerNumber].currentSpace];
    } else {
      // players[playerNumber] = players[playerNumber];
      console.log(playerNumber);
      console.log(theBoard[players[playerNumber].currentSpace]);
      theBoard[players[playerNumber].currentSpace] = theBoard[players[playerNumber].currentSpace];
    }
  } else {
    console.log(`${players[playerNumber].name} gets another turn!`);
    playerTurn(players[playerNumber]);
  }
}

console.log(`It is ${players[playerNumber].name}'s turn!`);

/** *takes the current space value of the player and uses it to find the name
     * of the current space on the board
   * */
function throwDice() {
  // move from menu screeen to game and show dice button
  if (players[playerNumber].isBankrupt) {
    console.log(`No more turns for you, ${players[playerNumber].name}`);
    alert(`No more turns for you, ${players[playerNumber].name}`);
  } else {
    console.log(
      `${players[playerNumber].name} is on ${
        theBoard[players[playerNumber].currentSpace].name
      } and has $${players[playerNumber].money}.`,
    );
    // inJail(player)
    playerTurn(players[playerNumber]);
    // rollDice();
    // movePlayer(players[playerNumber]);
    // whichSpace(theBoard[players[playerNumber].currentSpace]);
    console.log(
      `${players[playerNumber].name} is on ${
        theBoard[players[playerNumber].currentSpace].name
      } and has $${players[playerNumber].money}.`,
    );
  }
  switchPlayer();
}
console.log(throwDice);
const communityChest = [
  {
    title: 'Life insurance matures. Collect $100.',
    pulled: false,

    cardAction(player) {
      player.money += 100;
    },
  },
  {
    title: 'Xmas fund matures. Collect $100.',
    pulled: false,

    cardAction(player) {
      player.money += 100;
    },
  },
  {
    title: 'Advance to GO!',
    pulled: false,

    cardAction(player) {
      player.currentSpace = 1;
      theBoard[player.currentSpace].spaceAction(player);
    },
  },
  {
    title:
      'Grand Opera opening. Collect $50 from every player for opening night seats.',
  },
];
const chanceCards = [
  {
    title: 'Pay poor tax of $15',
    pulled: false,
    chanceAction(player) {
      player.money -= 15;
    },
  },
  {
    title:
    'Make general repairs on all your property. For each house pay $25. For each hotel $100',
    pulled: false,

    chanceAction(player) {
      player.money -= player.houseCount * 25;
      player.money -= player.hotelCount * 100;
    },
  },
  {
    title: 'Bank pays you dividend of $50',
    pulled: false,
    chanceAction(player) {
      player.money -= 50;
    },
  },
  {
    title: 'Take a ride on the Reading. If you Pass GO, collect $200.',
    pulled: false,

    chanceAction(player) {
      if (player.currentSpace > 6) {
        theBoard[1].spaceAction(player);
      }
      player.currentSpace = 6;
    },
  },
  {
    title: 'Take a walk on the Boardwalk. Advance token to Boardwalk.',
    pulled: false,
  // player.currentSpace = 40
  },
  {
    title: 'This card may be kept until needed or sold. Get out of jail free.',
    pulled: false,

    chanceAction(player) {
      player.currentSpace = 11;
    },
  },
  {
    title: 'Go back three spaces',
    pulled: false,

    chanceAction(player) {
      player.currentSpace -= 3;
    },
  },
  {
    title: 'Advance to GO. Collect $200',
    pulled: false,

    chanceAction(player) {
      player.currentSpace = 1;
      theBoard[1].spaceAction(player);
    },
  },
  {
    title: 'Advance to St. Charles Place. If you pass go, collect $200',
    pulled: false,

    chanceAction(player) {
      if (player.currentSpace > 12) {
        theBoard[1].spaceAction(player);
      }
    },
  },
  {
    title:
    'Advance token to the nearest railroad and pay owner twice the rental to which they are otherwise entitled. If the Railroad is unowned, you may buy it from the bank.',
    pulled: false,
    railroadSpaces: [6, 16, 26, 36],

    findSpace(space) {
      if (
        player.currentSpace
      < this.railroadSpaces[this.railroadSpaces.length - 1]
      ) {
        return space > player.currentSpace;
      }
      return railroadSpaces[0];
    },

    chanceAction(player) {
      player.currentspace = railroadSpaces.find(findSpace);
      theBoard[player.currentSpace].ownedby;
    },
  },
  {
    title: 'You have been Elected Chairman of the board. Pay each player $50.',
    pulled: false,

    chanceAction(player) {
      player.money -= 50 * players.length;
      for (let i = 0; i < players.length - 1; i += 1) {
        if (i !== playerNumber) {
          player[i].money += 50;
        }
      }
    },
  },
  {
    title: 'Go Directly to jail! Do not pass GO! Do not collect $200.',
    pulled: false,

    chanceAction(player) {
      player.currentSpace = 0;
      player.inJail = true;
      player.doubles = 0;
    },
  },
  {
    title: 'Advance to Illinois Ave.',
    pulled: false,

    chanceAction(player) {
      player.currentSpace = 20;
      player.whichSpace(player.currentSpace);
    },
  },
  {
    title:
    'Advance Token to nearest utility. If unowned, you may but it from bank. If owned, throw dice and pay owner a total ten times the amount thrown.',
    pulled: false,
    utilities: [13, 28],

    findSpace(space) {
      if (player.currentSpace < this.utilities[this.utilities.length - 1]) {
        return space > player.currentSpace;
      }
      return this.utilities[0];
    },

    chanceAction(player) {
      const rentOwed = rollDice() * 10;

      player.money -= rentOwed;
      player.currentspace = railroadSpaces.find(findSpace);
      theBoard[player.currentSpace].owner += rentOwed;
    },
  },
  {
    title: 'Your building loan matures. Collect $150',
    pulled: false,

    chanceAction(player) {
      player.money += 150;
    },
  },
];
console.log(chanceCards);

console.log(theBoard?.[players?.[playerNumber]]?.name);
console.log(communityChest);
console.log(players);
export default { players, theBoard, throwDice };
