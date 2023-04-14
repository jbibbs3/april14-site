
function displayRockBand(data) {
  const    
}


fetch('http://localhost:3000/bands')
  .then((response) => {
    if (!response.ok) {
        return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));