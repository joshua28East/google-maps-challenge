import { useRef, useEffect } from "react"

import "./Autocomplete.css"

function Autocomplete({ mapInstance }) {
  const autocompleteRef = useRef(null)

  useEffect(() => {
    const initAutocomplete = async () => {
      if (!mapInstance) return

      const card = document.getElementById("pac-input")

      mapInstance.controls[google.maps.ControlPosition.TOP_LEFT].push(card)

      const places = await google.maps.importLibrary("places")
      const autocomplete = new google.maps.places.PlaceAutocompleteElement()

      if (!card.hasChildNodes()) {
        card.appendChild(autocomplete)

        autocompleteRef.current = autocomplete
      }
    }

    initAutocomplete()
  }, [mapInstance])

  return (
    <div>
      <div id="pac-input" />
    </div>
  )
}

export default Autocomplete

