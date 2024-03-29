import "./Bar.css";

const Bar = ({ number }) => {
    return(
        <div className="bar-bg">
            <div>{number}</div>
            <div className="bar" style={{height: number+`px`}}></div>
        </div>
    )
}

export default Bar;
