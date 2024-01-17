import { useSelector } from "react-redux"

const NumbersPreview = () => {
    const previewArray = useSelector(state => state.numbers.array);

    return(
        <div>
        <b>Unsorted Array: </b> {previewArray && previewArray.map(item => item + ' ')}
        </div>
    )
}

export default NumbersPreview;
