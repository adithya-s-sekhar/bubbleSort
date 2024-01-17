import { useState } from "react"
import { useDispatch } from "react-redux";
import { addNumbers, sortNumbers } from "./numbersSlice";
import { useSelector } from "react-redux";

const NumbersInput = () => {
    const [input, setInput] = useState('83,41,57,28,69,10,92,15,47,75,21,55,3,36,68,64,50,8,29,14,39,78,46,89,12,26,58,66,97,7');
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
        </div>
    )
}

export default NumbersInput;
