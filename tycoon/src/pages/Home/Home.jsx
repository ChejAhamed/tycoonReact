import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="title">Home</div>
      <div className="container">
        <div className="container-top">
          <div className="sussexPicture" />
        </div>
        <div className="container-bottom">
          Welcome to Property Tycoon!

          This game is made by 2nd year students from the University of Sussex!

          <h4 className="h4h">About The Game:</h4>
          Property Tycoon is Watson Games most popular title!
          It is a property trading game similar to the classic Monopoly.
          Players are able to roll the dice to move across the board
          to purchase properties to collect rent from other players.

          <h4 className="h4h"> How To Play</h4>
          Select your desired character. Then you are able to roll your dice to move across
          the board to purchase properties of your choice. These properties would allow you
          to collect rent from the other players. There are also two packs of cards available
          in the game - pot luck and opportunity knocks. They could either benefit the player
          or knock progress from the player. The players who are unable to pay their rent
          would exit the game through bankruptcy. The winner would remain, having the most
          game assets.
        </div>
      </div>
    </div>
  );
}

export default Home;
