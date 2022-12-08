const BASE_URL = 'https://restcountries.com/v3.1';
export default function fetchCountries(name) {
  const url = `${BASE_URL}/name/${name}`;
  fetch(url)
    .then(res => {
      console.log(res);
      if (!res.ok) {
        throw new Error(res.message);
      }
      return res.json();
    })
    .then(data => console.log(data));
}
// const options = {
//   name,
//   capital,
//   population,
//   flags,
//   languages,
// };
