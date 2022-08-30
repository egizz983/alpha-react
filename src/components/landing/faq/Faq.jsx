import React from 'react'
import Classes from '../../scss/Faq.module.scss'
import { Row, Container, Col } from 'react-bootstrap'
import FqaImg from '../../../assets/images/faq.webp'
import AccordianItem from './AccordianItem'

const Faq = () => {
  const accordianTitle = [
    {
      title: 'What is AlphaPlay?',
      description: `AlphaPlay is a Play2Earn gaming platform hat was 
      developed on the Binance Smart Chain with the goal of rewarding users
       for engaging in games they like, fulfilling goals, and attending events 
       and competitions. AlphaPlay's ecosystem is unique since it rewards users
        for playing games they like rather than investing in hazardous and expensive
         cryptocurrency gaming projects, which often result in significant losses
          and a negative user experience. We do not need any investment to commence
           earning, however, there are methods to boost your profits by investing 
           in our tokens or NFTs. Additionally, players may earn interest by staking their tokens.`,
    },
    {
      title: 'Where can I purchase the AlphaPlay token?',
      description: `Currently you can buy tokens in AlphaPlay presale , ones presale is finished 
      you will be able to buy them at balancer pool and public exchanges`,
    },
    {
      title: 'When Will Play2Earn future  be available ?',
      description: 'Play2Earn futures will be enabled ones tokens are distributed on public exchanges for public use .',
    },
    {
      title: 'Witch Games AlphaPlay Supports?',
      description: 'AlphaPlay will support all major games and platforms(including all games on them) such as : Steam , EpicGames, Ubisoft, BattleNet,Xbox, PlayStation and more ... ',
    },
    {
      title: "Im an influencer/content creator/partner - Who should I contact?",
      description: 'You can contact by filling contact form , alternatively you can send us direct email to Info@alphaplay.games ',
    },
    {
      title: 'When can I buy NFTs ?',
      description: 'NFT is a second Phase funding raising to support the project and will be available once ICO and public distribution of tokens are finished .',
    }, 
  ]
  return (
    <div className={`py-5 ${Classes.faqWrapper}`}>
      <Container>
        <Row className='align-items-center'>
          <Col>
            <h1 className={`text-center mb-5 ${Classes.blockTitle}`}>
              <span className='text-white'>Frequently Asked</span>{' '}
              <span style={{ color: '#FC00FF' }}>Questions</span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <img src={FqaImg} alt='FqaImg' className='w-100' />
          </Col>
          <Col lg={7}>
            {accordianTitle?.map((item, index , description) => (
              <AccordianItem key={index} title={item.title} description={item.description}/>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Faq
