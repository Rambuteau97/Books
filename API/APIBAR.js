export function getBarsFromApiWithSearchedText (text) {
    const url = 'https://api.openbrewerydb.org/breweries?by_' + text
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }