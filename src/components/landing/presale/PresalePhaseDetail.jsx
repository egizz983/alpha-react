import { ReactComponent as CheckMarkCircleIcon } from '../../../assets/svg/checkmark-circle.svg';
import { ProgressBar } from 'react-bootstrap';
import Classes from '../../scss/PresalePhaseDetail.module.scss';

const PresalePhaseDetail = (props) => {
    const { progress = 0, title = 'Title', tokens = 0 } = props;

    let color = (progress < 100) ? 'info' : 'success';

    return (
        <>
            <style>
                {`
                .bg-success{
                    background-color:#4EC040 !important;
                }

                .bg-info{
                    background-color:#A0A0A0 !important;
                }
            `}
            </style>

            <div className={`${Classes.presalePhaseDetailWrapper} d-flex mt-5`}>
                <div><CheckMarkCircleIcon fill={`${(color === 'info') ? '#A0A0A0' : '#4EC040'}`} /></div>
                <div className="ms-4 w-100">
                    <h4 className={`${Classes.presalePhaseDetailTitle} mb-0`}>{title}</h4>
                    <p className={`${Classes.presalePhaseDetailText}`}>At {title.toLowerCase()} there will be {tokens} tokens sold as price of {tokens / 1000}/BNB</p>
                    <ProgressBar variant={color} now={progress} min={0} max={100} style={{ height: '6px' }} />
                </div>
            </div>
        </>
    );
};

export default PresalePhaseDetail;