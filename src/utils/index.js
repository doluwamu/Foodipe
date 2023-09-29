import axios from "axios";

const appID = import.meta.env.VITE_EDAMAM_APP_ID;
const apiKey = import.meta.env.VITE_EDAMAM_API_KEY;

export async function fetchRecipes(filter) {
  const { query, limit } = filter;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${apiKey}&from=0&to=${limit}&`;

  const { data } = await axios.get(url);

  //   const data = await response.json();

  return data?.hits;
}

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${appID}&app_key=${apiKey}`;

  const { data } = await axios.get(url);

  //   const data = await response.json();

  return data[0];
}
