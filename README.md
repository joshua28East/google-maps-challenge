# 🌍 Google Maps Interactive Challenge
## 📌 Overview
This coding challenge is designed to assess problem-solving skills and the ability to work with minimal guidance. The goal is to build a web application featuring:

✅ An interactive Google Map<br>
✅ Address Autocomplete for location search<br>
✅ Droppable pins with fun location details<br>
✅ Click-to-drop pins with info-windows<br>
✅ A creative "wow factor" feature<br>

## 🛠️ Setup & Installation

1. Clone this repository
```
git clone https://github.com/your-username/google-maps-challenge.git
cd google-maps-challenge
```

2. Install dependencies using NPM or your favorite package manager. 
(This this application uses pnpm so the pnpm-lockfile.yaml might need to be deleted before this step)
```
pnpm install
```

3.Create a .env file and add your Google API Key
```
VITE_GOOGLE_API_KEY=your_api_key_here
```

4. Run the application
```
pnpm run dev
```

🔗 Tech Stack
Vite (for fast development)
React
Google Maps JavaScript API
Google Places API for autocomplete

📜 Notes
A Google API Key is required. Follow [Google’s API setup guide](https://support.google.com/googleapi/answer/6158862?hl=en) to obtain one.
The free tier provides ample requests for testing.
