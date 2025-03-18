import { useRef } from "react"
import "./GoogleMap.css"
import { useEffect } from "react"

function GoogleMap({ setMapInstance, mapInstance }) {
  useEffect(() => {
    const initMap = async () => {
      if (mapInstance !== null) return

      const { Map } = await google.maps.importLibrary("maps")

      const map = new Map(document.getElementById("google-map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        disableDefaultUI: true
      })

      setMapInstance(map)
    }

    initMap()
  }, [])

  return <div id="google-map" />
}

export default GoogleMap

