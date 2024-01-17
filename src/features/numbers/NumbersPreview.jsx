import { useSelector } from "react-redux"

const NumbersPreview = () => {
    const previewArray = useSelector(state => state.numbers?.list);

    return(
        <div>
        <b>Array: </b> {previewArray && previewArray.map(item => item + '/')}
        </div>
    )
}

export default NumbersPreview;
