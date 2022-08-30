import { Container, Row, Col, Button } from "react-bootstrap";
import Classes from '../../scss/PresaleConnectWallet.module.scss';
import LogoIcon from '../../../assets/images/components/logoIcon.png';

const PresaleConnectWallet = () => {
    return (

        <div className={`${Classes.presaleConnectWalletWrapper}`}>
            <Container>
                <Row>
                    <Col lg={8} className="d-flex">
                        <div className={Classes.iconContainer}>
                            <img src={LogoIcon} alt='Logo' width='80' height='80' />
                        </div>
                        <div className={Classes.balanceContainer}>
                            <h4 className={Classes.WalletBalanceTitle}>Personal Balance</h4>
                            <p className={Classes.WalletAddress}>0xA1D9ABd006f3...</p>
                            <div className={Classes.WalletBalanceTokens}>
                                <p><span>$00000</span>ALPH</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className="d-flex p-0">
                        <div className={Classes.buttonContainer}>
                            <Button className={Classes.actionBtn}>
                                Connect Wallet
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >

    );
};

export default PresaleConnectWallet;