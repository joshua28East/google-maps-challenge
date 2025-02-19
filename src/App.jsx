import { useRef } from 'react';
import './App.css'
import GoogleMap from './components/GoogleMap/GoogleMap'

function App() {

  const mapRef = useRef(null)

  const initMap = async () => {

    const { Map } = await google.maps.importLibrary("maps");

    const map = new Map(document.getElementById("google-map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });

    mapRef.current = map
  }

  initMap()

  return (
    <div id='content'>
      <div id='google-map-container'>
        <GoogleMap />
      </div>
    </div>
  )
}

export default App
