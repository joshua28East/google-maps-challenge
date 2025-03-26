import { useRef, useEffect, useState } from "react"

import "./Autocomplete.css"
import Suggestion from "./Suggestion"

const getSuggestions = async (request) => {
  try {
    const { AutocompleteSuggestion } = await google.maps.importLibrary("places")

    const { suggestions } =
      await AutocompleteSuggestion.fetchAutocompleteSuggestions(request)

    return suggestions
  } catch (error) {
    console.error(error)
  }
}

function Autocomplete({ mapInstance, onPlaceSelected }) {
  const sessionToken = useRef(null)
  const [options, setOptions] = useState([])
  const [showOptions, setShowOptions] = useState(false)

  const onInputChanged = async (event) => {
    const dialog = document.getElementById("suggestions-list")

    if (event.target.value?.length < 3) {
      setOptions([])

      return
    }

    const inputValue = event.target.value

    const request = {
      input: inputValue,
      language: "en-US"
    }

    const { AutocompleteSessionToken } = await google.maps.importLibrary(
      "places"
    )

    if (!sessionToken.current) {
      request.sessionToken = new AutocompleteSessionToken()
    }

    const suggestions = await getSuggestions(request)

    setOptions(suggestions)
    setShowOptions(true)
  }

  const onInputFocused = (event) => {
    setShowOptions(true)
  }

  const onSelectSuggestion = (place) => {
    const input = document.getElementById("pac-input")

    input.value = place.formattedAddress

    setShowOptions(false)
    onPlaceSelected(place)
  }

  return (
    <div id="autocomplete-container">
      <div id="autocomplete-inputs">
        <button id="sidenav-btn"></button>
        <input
          id="pac-input"
          onChange={onInputChanged}
          onFocus={onInputFocused}
        />
        <button id="search-btn" />
        <button id="directions-btn" />
      </div>
      {showOptions ? (
        <dialog id="suggestions-dialog">
          <ul id="suggestions-list">
            {options.map((suggestion, index) => (
              <Suggestion
                key={`suggestion-${index}`}
                onSelect={onSelectSuggestion}
                suggestion={suggestion.placePrediction}
              />
            ))}
          </ul>
        </dialog>
      ) : null}
    </div>
  )
}

export default Autocomplete

