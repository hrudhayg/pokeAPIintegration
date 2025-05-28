🧩 Pokémon Search App
A simple web application that allows users to search for a Pokémon by name or ID and view its image, name, and type. Built using HTML, Bootstrap 5, and vanilla JavaScript with data fetched from the PokeAPI.

🚀 Live Demo
🔗 You can host this using GitHub Pages or any static web server.

📸 Preview

(Add this image to your repo to show a screenshot — optional)

🛠️ Features
🔍 Search Pokémon by name or ID

🖼️ Displays Pokémon's name, image, and type

⚠️ Error handling for invalid input

💡 Responsive UI using Bootstrap

📁 Project Structure
bash
Copy
Edit
pokeAPIintegration/
├── index.html        # Main HTML file with Bootstrap layout
├── script.js         # JavaScript for async fetch and DOM manipulation
├── styles.css        # (Optional) Custom styling
└── README.md         # Project documentation
🧪 How It Works
User enters a Pokémon name or ID

On click of the "Search" button:

JavaScript uses fetch() and async/await to get data from the PokeAPI

Pokémon details are extracted and dynamically added to the DOM

If the Pokémon is not found, an error message is shown

📦 Technologies Used
HTML5

Bootstrap 5

JavaScript (ES6)

Fetch API

PokeAPI: https://pokeapi.co/

🧑‍💻 Getting Started
Clone the repo:

bash
Copy
Edit
git clone git@github.com:hrudhayg/pokeAPIintegration.git
Open index.html in your browser.

Type a Pokémon name like pikachu or an ID like 25 and hit search!

💡 Future Enhancements
Show Pokémon abilities and stats

Add loading spinner

Search history

Better error UX and validations

📝 License
This project is open-source and free to use for learning purposes.