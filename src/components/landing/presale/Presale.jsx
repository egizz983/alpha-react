import React from 'react';
import Classes from '../../scss/Presale.module.scss';
import { Row, Container, Col } from 'react-bootstrap';
import PresaleForm from './PresaleForm';
import PresalePhasesDetail from './PresalePhasesDetail';
import PresaleConnectWallet from './PresaleConnectWallet';
import PresaleTotalRaised from './PresaleTotalRaised';

const Presale = () => {
    return (
        <div className={`${Classes.presaleWrapper} py-5`}>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2 className={`text-center text-white mb-3 ${Classes.blockTitle}`}>
                                Welcome to <span className={`${Classes.spanTextColor}`}>Alpha Play</span>
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col lg={6}>
                        <div className={`${Classes.presaleBlock} pb-5`}>
                            <PresaleTotalRaised />
                            <PresalePhasesDetail />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={`${Classes.presaleBlock + ' ' + Classes.flatBottom}`}>
                            <PresaleConnectWallet />
                        </div>
                        <div>
                            <PresaleForm />
                        </div>

                    </Col>
                </Row>

            </Container>
        </div >
    );
};

export default Presale;