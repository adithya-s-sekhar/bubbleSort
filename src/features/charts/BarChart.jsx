import { useSelector } from "react-redux";
import Bar from "../../components/Bar/Bar";

const BarChart = () => {

    const numbers = useSelector(state => state.numbers?.list);

    let content = [];

    if (!numbers){
        return(
            <div className="bar-chart">Empty</div>
        )
    } else {
        numbers.map((number,index) => {
            content.push(<Bar number={number} key={index}/>)
        })
        return(
        <div className="bar-chart">{content}</div>
        )
    }
}

export default BarChart;
