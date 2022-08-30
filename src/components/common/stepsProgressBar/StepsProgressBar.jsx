import './StepsProgressBar.css';

const StepsProgressBar = (props) => {
    const { progress = 0, items } = props;

    return (
        <div className="stepsProgressBar">
            <div className="stepsProgressBar-progress" style={{ width: `${progress}%` }}></div>
            <div className="stepsProgressBar-items">
                {items.map((item, i) => (
                    <div key={i} className={`stepsProgressBar-item ${item.circleColor}-progress` + (item.active ? ' active' : '')} >
                        <div className="stepsProgressBar-content">
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default StepsProgressBar;