import './VerticalProgressBar.css';

const VerticalProgressBar = (props) => {
    const { title = '', color = `white`, progress = 0 } = props;

    return (
        <>
            <div className={`VerticalprogressBox`}>
                <div className={`progressBar ${color}-progress`} style={{ height: `${progress}%` }}></div>
                <div className="progressLabel">{`${progress}%`}</div>
            </div>
            <div className="progressTitle">{title}</div>
        </>
    );
};

export default VerticalProgressBar;