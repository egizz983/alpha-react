import React from 'react';
import Classes from '../../scss/PresaleTotalRaised.module.scss';
import CircularProgressBar from '../../common/circularProgressBar/CircularProgressBar';
import StepsProgressBar from '../../common/stepsProgressBar/StepsProgressBar';
import VerticalProgressBar from '../../common/verticalProgressBar/VerticalProgressBar';
import { Container, Row, Col } from 'react-bootstrap';

const PresaleTotalRaised = () => {

    const phases = [{
        name: 'Phase 1',
        circleColor: 'green',
    },
    {
        name: 'Phase 2',
        circleColor: 'blue',
    },
    {
        name: 'Phase 3',
        circleColor: 'pink',
    },
    ];

    return (
        <div className={`${Classes.presaleTotalRaisedWrapper} py-3`}>
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex align-items-center">
                            <div class="text-white me-2">Total Raised:</div>
                            <CircularProgressBar progress="80" label="547.46 BNB" />
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex justify-content-between w-75">
                            <div>
                                <VerticalProgressBar title="Phase 1" color="green" progress="61" />
                            </div>
                            <div>
                                <VerticalProgressBar title="Phase 2" color="blue" progress="80" />
                            </div>
                            <div>
                                <VerticalProgressBar title="Phase 3" color="pink" progress="70" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class="mt-3">
                            <StepsProgressBar progress="80" items={phases} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PresaleTotalRaised;