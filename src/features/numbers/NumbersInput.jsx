import { useState } from "react"
import { useDispatch } from "react-redux";
import { addNumbers, sortNumbers, createChart } from "./numbersSlice";
import { useSelector } from "react-redux";

const NumbersInput = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const numbers = useSelector(state => state.numbers?.list);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = () => {
        dispatch(addNumbers(input));
        setInput('');
    }

    const handleSort = () => {
        dispatch(sortNumbers());
    }

    const handleChart = () => {
        dispatch(createChart(numbers));
    }

    const canSubmit = !Boolean(input);
    const canSort = !Boolean(numbers);

    return (
        <div>
        <input
            type="text"
            value={input}
            onChange={(e) => handleChange(e)}
            placeholder="Comma seperated values here"
        />
        <button onClick={handleSubmit} disabled={canSubmit}>Submit</button>
        <button onClick={handleSort} disabled={canSort}>Sort</button>
        <button onClick={handleChart} disabled={canSort}>Chart</button>
        </div>
    )
}

export default NumbersInput;
