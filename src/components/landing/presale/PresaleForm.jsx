import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import Classes from '../../scss/PresaleForm.module.scss';
import Countdown from 'react-countdown';

const PresaleForm = () => {
    return (
        <div className={Classes.presaleForm}>
            <Container className={`${Classes.presaleFormBgColor + ' ' + Classes.presaleFormContainer1} pt-1`}>
                <Row className="mb-4">
                    <Col className="text-center">
                        <h4>PRE - SALE INFO</h4>
                        <Countdown date={Date.now() + 100000000} className={Classes.timerOutline} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label className={Classes.label}>Your Investment</Form.Label>
                            <Form.Control type="text" placeholder="0.00" className={Classes.inputField} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className={Classes.presaleTokenPrice}>
                    <Col>
                        <p>Presale Token Price</p>
                    </Col>
                    <Col className={Classes.col2}>
                        <p>1 BNB = <span>250</span> ALPHA</p>
                    </Col>
                </Row>
                <Row className={Classes.minMaxPurchase}>
                    <Col>
                        <div className={Classes.label}>Min Purchase</div>
                        <div className={Classes.inputField}><span>0.1</span> BNB</div>
                    </Col>
                    <Col className="d-flex flex-column align-items-end">
                        <div className={Classes.label}>Max Purchase</div>
                        <div className={Classes.inputField}><span>15</span> BNB</div>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label className={Classes.label}>Total in Tokens</Form.Label>
                            <Form.Control type="text" placeholder="0.00" className={Classes.inputField + " " + Classes.inputBgColor} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Check.Input className={Classes.IAgreeCheckBox} />
                            <Form.Check.Label className={Classes.IAgreeCheckBoxLabel}>I agree to term of services (Including purscher’s citizenship and or residency restriction) and Privacy Policy</Form.Check.Label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Check.Input className={Classes.IAgreeCheckBox} />
                            <Form.Check.Label className={Classes.IAgreeCheckBoxLabel}>I am not a citizen and or resident of FATF blacklist countries and or countries not recognized by the EU</Form.Check.Label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <Button className={Classes.actionBtn}>
                            Buy Now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div >

    );
};

export default PresaleForm;