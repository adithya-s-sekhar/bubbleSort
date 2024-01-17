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
        for(let i = 0; i < numbers.length; i++){
            content.push(<Bar number={numbers[i]}/>)
        }
        return(
        <div className="bar-chart">{content}</div>
        )
    }
    

}

export default BarChart;
