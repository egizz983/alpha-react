import React from 'react';
import Classes from '../../scss/Banner.module.scss';
import Banner1Img from '../../../assets/images/discordposts.jpg';
import Banner2Img from '../../../assets/images/espostsSlide.jpg';
import Banner3Img from '../../../assets/images/Presale.png';
import Banner4Img from '../../../assets/images/SubscribeSlide.jpg';
import { Row, Container, Col, Button } from 'react-bootstrap';
import  PlayIcon from '../../../assets/svg/svgfiles.tsx';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className='banner-carousel'>
      <Slider {...settings}>
        <div>
          <div
            className={`${Classes.bannerWrapper} pt-5 mt-5 d-flex justify-content-center align-items-center`}
            style={{ background: `url(${Banner1Img})` }}
          >
            <Container>
              <Row>
                <Col lg={12}>
                  <div className={Classes.bannerInner} style={{marginBottom: '150px'}}>
                    <h1 className={`${Classes.title} text-center`}>
                      Join AlphaPlay
                    </h1>
                    <p className={`${Classes.description} text-center`} style={{marginTop: '-25px'}}>
                    Join ever-growing ecosystem.Earn as you play.{' '}
                    </p>
                    <div className='d-flex align-items-center justify-content-center gap-3 flex-wrap mt-4'>
                      <div className='d-flex align-items-center gap-3' style={{marginTop: '-25px'}}>
                        
                          <Link className={Classes.play} to='/WelcomeAlpha' style={{textDecoration: 'none'}}>
                            <PlayIcon fill='white' />
                            <span >Watch Video</span>
                          </Link>
                        
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        
        <div>
          <div
            className={`${Classes.bannerWrapper} pt-5 mt-5 d-flex justify-content-center align-items-center`}
            style={{ background: `url(${Banner3Img})` }}
          >
            <Container style={{ "margin-bottom": '-380px' }} >
              <Row>
                <Col lg={12}>
                  <div className={Classes.bannerInner}>
                    <a href="https://presale.alphaplay.games" style={{textDecoration: 'none'}}><h1 className={`${Classes.presaletitle} text-center`} >
                      Join AlphaPlay Presale
                    </h1></a>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <div
            className={`${Classes.bannerWrapper} pt-5 mt-5 d-flex justify-content-center align-items-center`}
            style={{ background: `url(${Banner2Img})` }}
          >
            <Container>
              <Row>
                <Col lg={5}>
                  <div className={Classes.bannerLeft}>
                    <h1 className={`${Classes.title} text-center`}>
                      ESports
                    </h1>
                    <p className={`${Classes.description} `}>
                      Participate in our daily events, or simply
                      hang out with your friends and enjoy the
                      endless opportunities of gaming!
                    </p>
                    <Button href="#" className={Classes.startedBtn} >
                        Learn More
                      </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <div
            className={`${Classes.bannerWrapper} pt-5 mt-5 d-flex justify-content-center align-items-center`}
            style={{ background: `url(${Banner4Img})` }}
          >
            <Container>
              <Row>
                <Col lg={5}>
                  <div className={Classes.bannerLeft}>
                    <h1 className={`${Classes.title} text-center`}>
                    Subscribe 
                    </h1>
                    <p className={`${Classes.description} `}>
                      Get the latest news, deals, and giveaways
                      delivered straight to your inbox!
                    </p>
                    <Button href="#" className={Classes.startedBtn} >
                        Subscribe
                      </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
