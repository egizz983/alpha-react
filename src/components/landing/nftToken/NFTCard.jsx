import React from 'react';
import Classes from '../../scss/NFTCard.module.scss';
import { Button } from 'react-bootstrap';
const NFTCard = (props) => {
  const { cardTitle, cardImg } = props
  const tagsItem = [
    {
      tagName: 'Unique Avatar Ring',
    },
    {
      tagName: 'Token Value 150',
    },
    {
      tagName: '+1.5% Stacking bonusatar Ring',
    },
    {
      tagName: '+1% Store Discount',
    },
    {
      tagName: '+3% Experience Bonus',
    },
  ];

  const cardClass = cardTitle.toLowerCase();

  const listItems = tagsItem.map((tag, index) =>
    <li key={index}>{tag.tagName}</li>
  );

  return (

    <div className={`${Classes.nftcardWrapper}`}>
      <div className="text-center">
        <img src={cardImg} alt='GoldImg' />
      </div>
      <div className="text-center mb-4">
        <h1 className={`${Classes.cardTitle + ' ' + cardClass + 'Card'} text-white mb-2`}>{cardTitle}</h1>
        <div className={Classes.CardDivider}>&nbsp;</div>
      </div>
      <div className={`${Classes.tagsWrapper} d-flex align-items-center gap-2 flex-wrap mb-3 text-white`}>
        <ul className={Classes.tagItemsList}>{listItems}</ul>
      </div>
      <div className="text-center">
        <Button className={Classes.actionBtn}>
          Not Avaliable
        </Button>
      </div>
    </div>
  );
};

export default NFTCard;
