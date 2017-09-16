const API_ID = '14a3e85b' //process.env.REACT_APP_API_ID
const APP_KEY = 'dc32041c8c17cc4336c201b819ccf728' //process.env.REACT_APP_APP_KEY

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
} 