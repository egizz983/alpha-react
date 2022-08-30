import Classes from '../../scss/PresalePhasesDetail.module.scss'
import PresalePhaseDetail from './PresalePhaseDetail';
import { Container, Col, Row } from 'react-bootstrap';

const PresalePhasesDetail = () => {
    return (
        <Container className={`${Classes.presalePhasesDetailWrapper} mt-4`}>
            <Row>
                <Col>
                    <h3 className={Classes.detailPhasesHeading}>Details:</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PresalePhaseDetail progress="80" title="Phase 1" tokens="250000" />
                    <PresalePhaseDetail progress="30" title="Phase 2" tokens="150000" />
                    <PresalePhaseDetail progress="50" title="Phase 3" tokens="150000" />
                </Col>
            </Row>
        </Container>
    );
};

export default PresalePhasesDetail;