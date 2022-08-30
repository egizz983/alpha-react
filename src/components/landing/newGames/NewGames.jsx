import React from 'react'
import Classes from '../../scss/NewGames.module.scss'
import { Row, Container, Col,Button } from 'react-bootstrap';
import {Esports,Store,AlphaPlaySeason,Governance} from './NewGameCard';
import Sidebar from './Sidebar';
import VideoItem from './VideoItem';
import { ReactComponent as CarrotRight } from '../../../assets/svg/carrotRight.svg';
import { ReactComponent as CarrotLeft } from '../../../assets/svg/carrotLeft.svg';
import Slider from 'react-slick';
const NewGames = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <div><CarrotRight /></div>,
        prevArrow: <div><CarrotLeft /></div>,
      };
  return (
    <div className={`${Classes.newgamesWrapper} py-5 achievementWrapper`}>
        <Container>
            <Row>
                <Col lg={8}>
                <h1 className={`${Classes.blockTitle} mb-5`}>
                    {' '}
                    <span style={{ color: '#EE05FF' }}>AlphaPlay</span>{' '}
                    <span className='text-white'>Futures</span>
                </h1>
                    <Slider {...settings}>
                        <div>
                            <Row>
                                <Col lg={6}>
                                    <Esports />
                                </Col>
                                <Col lg={6}>
                                    <Store />
                                </Col>
                                <Col lg={6}>
                                    <AlphaPlaySeason />
                                </Col>
                                <Col lg={6}>
                                    <Governance />
                                </Col>{/** 
                                <Col lg={6}>
                                    <NewGameCard />
                                </Col>
                                <Col lg={6}>
                                    <NewGameCard />
                                </Col>*/}
                            </Row>
                        </div>
                        <div>
                            <Row>
                            <Col lg={6}>
                                    <Esports />
                                </Col>
                                <Col lg={6}>
                                    <Store />
                                </Col>
                                <Col lg={6}>
                                    <AlphaPlaySeason />
                                </Col>
                                <Col lg={6}>
                                    <Governance />
                                </Col>{/** 
                                <Col lg={6}>
                                    <NewGameCard />
                                </Col>
                                <Col lg={6}>
                                    <NewGameCard />
                                </Col>*/}
                            </Row>
                        </div>
                    </Slider>
                </Col>
                <Col lg={4}>
                    <Sidebar />
                </Col>
            </Row>{/*
            <Row className='mt-5'>
                <Col lg={6}>
                    <VideoItem />
                </Col>
                <Col lg={6}>
                    <VideoItem />
                </Col>
            </Row>
            <div className='d-flex justify-content-center mt-5'>
                <Button className={Classes.viewAllBtn}>
                    View All
                </Button>
            </div>*/}
        </Container>
    </div>
  )
}

export default NewGames