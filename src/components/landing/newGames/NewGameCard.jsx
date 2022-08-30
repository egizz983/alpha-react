import React from 'react';
import Classes from '../../scss/NewGameCard.module.scss';
import EsportsIMG from '../../../assets/images/esporst.png';
import StoreIMG from '../../../assets/images/store.png';
import AlphaPlaySeasonIMG from '../../../assets/images/slide last.png';
import GovernanceIMG from '../../../assets/images/governance.png';

const Esports = () => {
  return (
    <div className={`${Classes.newGameCardWrapper} mb-5`}>
      <div className='mb-3'>
        <img
          src={EsportsIMG}
          alt='EsportsIMG'
          className={Classes.imgItem}
        />
      </div>
      <div>
        <div className='d-flex justify-content-between align-items-center flex-wrap'>
          <h1 className={Classes.cardTitle}>ESPORTS</h1>
          {/* <span className={Classes.metaInfo}>PC/XBOX/PS</span> */}
        </div>
        <p className={Classes.description}>
        Compete with world best players in world wide tournaments to win cash,crypto and other prizes. Construct your own
         unique matches with custom rules and invite people from your gaming group to participate and compete.
        </p>
      </div>
    </div>
  );
};

const Store = () => {
  return (
    <div className={`${Classes.newGameCardWrapper} mb-5`}>
      <div className='mb-3'>
        <img
          src={StoreIMG}
          alt='StoreIMG'
          className={Classes.imgItem}
        />
      </div>
      <div>
        <div className='d-flex justify-content-between align-items-center flex-wrap'>
          <h1 className={Classes.cardTitle}>STORE</h1>
          {/* <span className={Classes.metaInfo}>PC/XBOX/PS4</span> */}
        </div>
        <p className={Classes.description}>
        Store AlphaPlay will offer real-world items such as gaming laptops, monitors, virtual reality headsets, 
        keyboards, and other gaming accessories. Additionally, digital items such as NFTs, game vouchers, and digital game
         copies are available.
        </p>
      </div>
    </div>
  );
};

const AlphaPlaySeason = () => {
  return (
    <div className={`${Classes.newGameCardWrapper} mb-5`}>
      <div className='mb-3'>
        <img
          src={AlphaPlaySeasonIMG}
          alt='AlphaPlaySeasonIMG'
          className={Classes.imgItem}
        />
      </div>
      <div>
        <div className='d-flex justify-content-between align-items-center flex-wrap'>
          <h1 className={Classes.cardTitle}>ALPHA SEASON</h1>
          {/* <span className={Classes.metaInfo}>PC/XBOX/PS4</span> */}
        </div>
        <p className={Classes.description}>
        Enter the competitions in each season to have a chance to win unique and exotic prizes, such as
         NFTs, badges, Crypto and other items that are specific to that season.
        </p>
      </div>
    </div>
  );
};

const Governance = () => {
  return (
    <div className={`${Classes.newGameCardWrapper} mb-5`}>
      <div className='mb-3'>
        <img
          src={GovernanceIMG}
          alt='GovernanceIMG'
          className={Classes.imgItem}
        />
      </div>
      <div>
        <div className='d-flex justify-content-between align-items-center flex-wrap'>
          <h1 className={Classes.cardTitle}>GOVERNANCE</h1>
          {/* <span className={Classes.metaInfo}>PC/XBOX/PS4</span> */}
        </div>
        <p className={Classes.description}>
        AlphaPlay community governs itself via the staking ALPH token. Governance will allow users to have their opinions heard & sway the direction of the project.
        </p>
      </div>
    </div>
  );
};

export  {Esports,Store,AlphaPlaySeason,Governance};
