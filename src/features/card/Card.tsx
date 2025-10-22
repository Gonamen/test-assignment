import React from 'react';
import { TGame } from '../../entities/game';
import './Card.css';

const Card = (props: TGame) => {
  const { gameName, gameID } = props;
  const imageUrl = `https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${gameID}.png`;

  return (
    <div className="game-card">
      <img className="game-card__image" src={imageUrl} alt={gameName} loading="lazy" />
      <span>{gameName}</span>
    </div>
  );
};

export default Card;
