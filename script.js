async function searchPokemon() {
    const input = document.getElementById('pokemonInput').value.toLowerCase().trim();
    const resultDiv = document.getElementById('result');
    const errorText = document.getElementById('error');
  
    // Clear previous content
    resultDiv.innerHTML = '';
    errorText.textContent = '';
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
      if (!response.ok) throw new Error('Pokémon not found');
  
      const data = await response.json();
  
      // Create and add name, image, and type
      const name = document.createElement('h2');
      name.textContent = data.name;
  
      const img = document.createElement('img');
      img.src = data.sprites.front_default;
  
      const type = document.createElement('p');
      type.textContent = `Type: ${data.types.map(t => t.type.name).join(', ')}`;
  
      resultDiv.appendChild(name);
      resultDiv.appendChild(img);
      resultDiv.appendChild(type);
    } catch (error) {
      errorText.textContent = 'Pokémon not found. Please try another name or ID.';
    }
  }
  