const url = "https://restcountries.eu/rest/v2/name/eesti";
fetch(url)
  .then((responce) => responce.json())
  .then((parcedResponce) => console.log(parcedResponce));
