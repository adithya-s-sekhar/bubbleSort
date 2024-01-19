import { useSelector } from "react-redux";
import Bar from "../../components/Bar/Bar";
import { useEffect } from "react";

const BarChart = () => {

    const numbers = useSelector(state => state.numbers.list);

    return(
        <div className="bar-chart">
            {numbers && numbers.map((number,index) => (
                <Bar number={number} key={index}/>
            ))}
        </div>
    )
}

export default BarChart;
