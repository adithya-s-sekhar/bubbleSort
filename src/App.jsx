import './App.css'
import Chart from './features/chart/Chart'
import NumbersInput from './features/numbers/NumbersInput'
import NumbersPreview from './features/numbers/NumbersPreview'

function App() {

  return (
    <div className="app">
      <NumbersInput />
      <NumbersPreview />
      <Chart />
    </div>
  )
}

export default App
