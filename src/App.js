import './App.css';
import { useState } from "react"
import BuildpackForm from "./BuildpackForm"

function App() {
  const [buildpack, setBuildpack] = useState("")
  const [buildpackList, setBuildpackList] = useState([])

  const handleSubmit = event => {
    event.preventDefault()
    const newBuildpack = {
      id: Date.now(),
      name: buildpack,
    }
    setBuildpackList([...buildpackList, newBuildpack])
    setBuildpack("")
  }

  return (
    <div className="App">
      <BuildpackForm
        handleSubmit={handleSubmit}
        buildpack={buildpack}
        setBuildpack={setBuildpack}
      />
      <ul>
        {buildpackList.map(({id, name}) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
