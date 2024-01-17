import "./Bar.css";

const Bar = ({height, number}) => {
    return(
        <div className="bar" style={{height: height}}>
            {number}
        </div>
    )
}

export default Bar;
