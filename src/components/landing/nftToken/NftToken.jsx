import React from 'react';
import Classes from '../../scss/NftToken.module.scss';
import { Row, Container, Col } from 'react-bootstrap';
import NFTCard from './NFTCard';
import GoldImg from '../../../assets/images/components/gold.png';
import BronzeImg from '../../../assets/images/components/bronze.png';
import SilverImg from '../../../assets/images/components/silver.png';


const NftToken = () => {
  return (
    <div className={`${Classes.nftTokenWrapper} py-5`}>
      <Container>
        <Row>
          <Col>
            <div>
              <h1
                className={`text-center text-white mb-3 ${Classes.blockTitle}`}
              >
                NFT Tokens
              </h1>
              <p className={`text-center ${Classes.description}`}>
                AlphaPlay early investor NFT token that rewards early investors
                .You will get immediate and long-term value as a result of the
                passive earning boosts and other perks that are provided.
              </p>
            </div>
          </Col>
        </Row>
        <Row className='mt-5 position-relative'>
          <Col lg={4}>
            <NFTCard cardTitle='Gold' cardImg={GoldImg} />
            {
              //<div className={`${Classes.bgCirclePink} position-absolute`}></div>
            }
          </Col>
          <Col lg={4}>
            <NFTCard cardTitle='Silver' cardImg={SilverImg} />
          </Col>
          <Col lg={4}>
            {
              //<div className={`${Classes.bgCircleBlue} position-absolute`}></div>
            }
            <NFTCard cardTitle='Bronze' cardImg={BronzeImg} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NftToken;
