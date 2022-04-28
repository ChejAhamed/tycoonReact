/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
// const currentPosition = 0;
import BootLogo from '../assets/Boot.png';
import IronLogo from '../assets/Iron.png';
import HatStandLogo from '../assets/Hat_Stand.png';
import MobilePhoneLogo from '../assets/Mobile Phone.png';
import ShipLogo from '../assets/Ship.png';
import CatLogo from '../assets/Cat.png';

let playerNumber = 0;
let currentRoll = 0;
const playersLost = [];
const makeAChoice = () => {
  if (Math.random() * 1 < 0.5) {
    return true;
  }
  return false;
};
/* const buyProperty = (player, property) => {
  if (player.money >= property?.value) {
    // pay for the property
    player.money -= property.value
    // set purchased value to true
    property.purchased = true
    // set this player as owner
    property.ownedBy = player.id
    // push this into a list of properties owned by this player
    player.properties.push(property)
  }
}
const propertyNames = player => {
  const propertyNameList = []
  for (let i = 0; i < this.properties.length; i += 1) {
    propertyNameList.push(player.properties[i].name)
  }
  return propertyNameList
}
*/
const players = [
  {
    id: 1,
    name: 'Boot',
    piece: 'boot',
    logo: BootLogo,
    currentSpace: 1,
    isBankrupt: false,
    money: 1500,
    properties: [],
    propertyNameList: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,
    buyProperty(thisProperty) {
      if (thisProperty.purchased == true) {
        alert('This property is already owned');
      }
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
        alert(`${this.name} just bought ${thisProperty.name} for $${thisProperty.value}`);
        alert(`${this.name} now owns ${thisProperty?.name}! Enjoy!`);
      } else {
        alert(`You can't afford ${thisProperty?.name}, ${this?.name}`);
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
    name: 'Iron',
    piece: 'iron',
    logo: IronLogo,
    currentSpace: 1,
    isBankrupt: false,
    money: 150,
    properties: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,
    buyProperty(thisProperty) {
      if (thisProperty.purchased == true) {
        alert('This property is already owned');
      }
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
        alert(`${this.name} just bought ${thisProperty.name} for $${thisProperty.value}`);
        alert(`${this.name} now owns ${thisProperty?.name}! Enjoy!`);
      } else {
        alert(`You can't afford ${thisProperty?.name}, ${this?.name}`);
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
    id: 3,
    name: 'Hat Stand',
    piece: 'hatStand',
    logo: HatStandLogo,
    currentSpace: 1,
    isBankrupt: false,
    money: 1500,
    properties: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,
    buyProperty(thisProperty) {
      if (thisProperty.purchased == true) {
        alert('This property is already owned');
      }
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
        alert(`${this.name} just bought ${thisProperty.name} for $${thisProperty.value}`);
        alert(`${this.name} now owns ${thisProperty?.name}! Enjoy!`);
      } else {
        alert(`You can't afford ${thisProperty?.name}, ${this?.name}`);
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
    id: 4,
    name: 'Mobile Phone',
    piece: 'Mobile Phone',
    logo: MobilePhoneLogo,
    currentSpace: 1,
    isBankrupt: false,
    money: 1500,
    properties: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,
    buyProperty(thisProperty) {
      if (thisProperty.purchased == true) {
        alert('This property is already owned');
      }
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
        alert(`${this.name} just bought ${thisProperty.name} for $${thisProperty.value}`);
        alert(`${this.name} now owns ${thisProperty?.name}! Enjoy!`);
      } else {
        alert(`You can't afford ${thisProperty?.name}, ${this?.name}`);
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
    id: 5,
    name: 'Ship',
    piece: 'ship',
    logo: ShipLogo,
    currentSpace: 1,
    isBankrupt: false,
    money: 1500,
    properties: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,
    buyProperty(thisProperty) {
      if (thisProperty.purchased == true) {
        alert('This property is already owned');
      }
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
        alert(`${this.name} just bought ${thisProperty.name} for $${thisProperty.value}`);
        alert(`${this.name} now owns ${thisProperty?.name}! Enjoy!`);
      } else {
        alert(`You can't afford ${thisProperty?.name}, ${this?.name}`);
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
    id: 6,
    name: 'Cat',
    piece: 'cat',
    logo: CatLogo,
    currentSpace: 1,
    isBankrupt: false,
    money: 1500,
    properties: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,
    buyProperty(thisProperty) {
      if (thisProperty.purchased == true) {
        alert('This property is already owned');
      }
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
        alert(`${this.name} just bought ${thisProperty.name} for $${thisProperty.value}`);
        alert(`${this.name} now owns ${thisProperty?.name}! Enjoy!`);
      } else {
        alert(`You can't afford ${thisProperty?.name}, ${this?.name}`);
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
];

function youLose(player) {
  playersLost.push(player);
  player.isBankrupt = true;
  player.doubles = false;
}

const theBoard = [
  {
    name: 'Jail',

    spaceAction(player) {
      // mising logic
      player.money -= 50;
      alert('You lost 50');
    },
  },
  {
    name: 'Go!',

    spaceAction(player) {
      player.money += 200;
    },
  },
  {
    name: 'The Old Creek',
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
        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        player.money -= this.rent;
        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;

        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
        }
      }
    },
  },
  {
    name: 'Pot Luck',
    propType: false,

    spaceAction(player) {
      const randoCard = Math.random() * 3;
      if (randoCard <= 1) {
        // advance to GO!
        player.currentspace = 1;
      } else if (randoCard < 1 && randoCard <= 2) {
        // pay doctor's fee
        player.money -= 50;
      } else if (randoCard < 2) {
        // inherit $100
        player.money += 100;
      }
    },
  },
  {
    name: 'Ganster Paradise',
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

        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        player.money -= this.rent;
        alert(`Pay ${this.rent} rent`);

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;

        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
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
    },
  },
  {
    name: 'Brighton Station',
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

        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        /** *subtract the rent from player */
        player.money -= this.rent;
        alert(`Pay ${this.rent} rent`);

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;

        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
        }
      }
    },
  },
  {
    name: 'The Angels Delight',
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

        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        player.money -= this.rent;
        alert(`Pay ${this.rent} rent`);

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;

        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
        }
      }
    },
  },
  {
    name: 'Opportunity Knocks',
    propType: 'card',

    spaceAction() {},
  },
  {
    name: 'Potter Avenue',
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

        /** * If you can afford the rent */
      } else if (this.purchased && player.money - this.rent > 0) {
        player.money -= this.rent;
        alert(`Pay ${this.rent} rent`);

        /** *Pay the owner of the property */
        players[this.ownedBy].money += this.rent;

        /** *If it's for sale */
      } else if (!this.purchased) {
        // offer sale
        if (player.makeAChoice) {
          player.buyProperty(theBoard[players[playerNumber]?.currentSpace]);
        }
      }
    },
  },
  {
    name: 'Granger Drive',
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
        alert(`Pay ${this.rent} rent`);

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
      alert(
        `${player.name} looks through the cold bars to the empty cell.`,
      );
    },
  },

  // LEFT SIDE OF BOARD
  {
    name: 'Skywalker Drive',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Tesla Power Co.',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Wookie Hole',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Rey Lane',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Hove Station',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Bishop Drive',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Pot Luck',
    propType: 'card',

    spaceAction() {
      console.log('Pick a card!');
    },
  },
  {
    name: 'Dunham Street',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Broyles Lane',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Yui Fei Quare',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Opportunity Knocks',
    propType: 'card',

    spaceAction() {
      console.log('Pick a card!');
    },
  },
  {
    name: 'Mulan Rouge',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Han Xin Gardens',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Falmer Station',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Shatner Close',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Picard Avenue',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Water Edison',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Crusher Creek',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Sirat Mews',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Ghengis Crescent',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Pot Luck',
    propType: 'card',

    spaceAction() {
      console.log('Pick a card!');
    },
  },
  {
    name: 'Ibis Close',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Portslade Station',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Opportunity Knocks',
    propType: 'card',

    spaceAction() {
      console.log('Pick a card!');
    },
  },
  {
    name: 'James Webb Way',
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
        alert(`Pay ${this.rent} rent`);

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
    name: 'Super Tax',
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
    name: 'Turning Heights',
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
        alert(`Pay ${this.rent} rent`);

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
  console.log('switched');
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
const PotLuck = [
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
const opportunityKnocks = [
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
console.log(theBoard?.[players?.[playerNumber]]?.name);
console.log(PotLuck);
console.log(players);
export default {
  players,
  theBoard,
  throwDice,
  switchPlayer,
};
