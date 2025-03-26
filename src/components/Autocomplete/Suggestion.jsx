import "./Autocomplete.css"

function Suggestion({ suggestion, onSelect }) {
  const onClick = async () => {
    const place = suggestion.toPlace()

    const fields = [
      "addressComponents",
      "formattedAddress",
      "location",
      "plusCode",
      "types"
    ]

    await place.fetchFields({
      fields
    })

    onSelect(place)
  }

  return (
    <li onClick={onClick} className="suggestion">
      <span className="suggestion-icon">📌</span>
      <span className="suggestion-main">{suggestion.mainText.toString()}</span>
      <span> </span>
      <span className="suggestion-text">
        {suggestion.secondaryText.toString()}
      </span>
    </li>
  )
}

export default Suggestion

