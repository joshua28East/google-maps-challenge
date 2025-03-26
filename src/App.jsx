import { useRef } from "react"
import "./App.css"
import GoogleMap from "./components/GoogleMap/GoogleMap"
import Autocomplete from "./components/Autocomplete/Autocomplete"
import { useState } from "react"

function App() {
  const [mapInstance, setMapInstance] = useState(null)

  return (
    <div id="content">
      <div id="google-map-container">
        <Autocomplete mapInstance={mapInstance} />
        <GoogleMap setMapInstance={setMapInstance} mapInstance={mapInstance} />
      </div>
      <div>Side bar</div>
    </div>
  )
}

export default App
