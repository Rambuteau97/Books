export function getBarsFromApiWithSearchedText(text) {
  const url = 'https://api.openbrewerydb.org/breweries?by_city=' + text;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getBarsFromApiWithSearchedTextName(text) {
  const url = 'https://api.openbrewerydb.org/breweries?by_name=' + text;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
