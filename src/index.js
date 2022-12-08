import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

const inputRef = document.getElementById('search-box');

function invokeResponseSet() {
  const name = inputRef.value;
  console.log(name);
  fetchCountries(name);
}
inputRef.addEventListener('input', debounce(invokeResponseSet, DEBOUNCE_DELAY));
