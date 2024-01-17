import { useSelector } from "react-redux"

const NumbersPreview = () => {
    const previewArray = useSelector(state => state.numbers.array);

    return(
        <>
        <b>Unsorted Array: </b> {previewArray && previewArray.map(item => item + ' ')}
        </>
    )
}

export default NumbersPreview;
