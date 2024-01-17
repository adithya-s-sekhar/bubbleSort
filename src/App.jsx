import './App.css'
import BarChart from './features/charts/BarChart'
import NumbersInput from './features/numbers/NumbersInput'
import NumbersPreview from './features/numbers/NumbersPreview'

function App() {

  return (
    <div className="app">
      <NumbersInput />
      <NumbersPreview />
      <BarChart />
    </div>
  )
}

export default App
