import './CircularProgressBar.css'

const CircularProgressBar = (props) => {
    let {
        size = 100,
        progress = 0,
        trackWidth = 7,
        trackColor = `#fff`,
        indicatorWidth = 7,
        indicatorCap = `round`,
        label = `Label`,
        labelColor = `#fff`,
        spinnerMode = false,
        spinnerSpeed = 1
    } = props

    const center = size / 2,
        radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
        dashArray = 2 * Math.PI * radius,
        dashOffset = dashArray * ((100 - progress) / 100)

    let hideLabel = (size < 100 || !label.length || spinnerMode) ? true : false

    return (
        <>
            <div
                className="svg-pi-wrapper"
                style={{ width: size, height: size }}
            >
                <svg
                    className="svg-pi"
                    style={{ width: size, height: size }}
                >

                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#00DBDE', stopOpacity: '1' }} />
                            <stop offset="100%" style={{ stopColor: '#FC00FF', stopOpacity: '1' }} />
                        </linearGradient>
                    </defs>


                    <circle
                        className="svg-pi-track"
                        cx={center}
                        cy={center}
                        fill="transparent"
                        r={radius}
                        stroke={trackColor}
                        strokeWidth={trackWidth}
                    />

                    <circle
                        className={`svg-pi-indicator ${spinnerMode ? "svg-pi-indicator--spinner" : ""
                            }`}
                        style={{ animationDuration: spinnerSpeed * 1000 }}
                        cx={center}
                        cy={center}
                        fill="transparent"
                        r={radius}
                        stroke="url(#grad1)"
                        strokeWidth={indicatorWidth}
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        strokeLinecap={indicatorCap}
                    />
                </svg>

                {!hideLabel && (
                    <div
                        className="svg-pi-label"
                        style={{ color: labelColor }}
                    >
                        <span className="svg-pi-label__loading">
                            {label}
                        </span>

                        {spinnerMode && (
                            <span className="svg-pi-label__progress">
                                {`${progress > 100 ? 100 : progress
                                    }%`}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default CircularProgressBar;