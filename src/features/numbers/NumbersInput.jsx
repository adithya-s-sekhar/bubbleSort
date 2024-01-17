import { useState } from "react"
import { useDispatch } from "react-redux";
import { addNumbers, sortNumbers } from "./numbersSlice";
import { useSelector } from "react-redux";

const NumbersInput = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInput(e.target.value.split(','));
    }

    const handleSubmit = () => {
        dispatch(addNumbers(input));
        setInput('');
    }

    const handleSort = () => {
        dispatch(sortNumbers());
    }

    const canSubmit = !Boolean(input);
    const canSort = !Boolean(useSelector(state => state.numbers.array))

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
        </div>
    )
}

export default NumbersInput;
