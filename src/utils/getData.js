const getData = (api) => {
  return fetch(api)
    .then(reponse => response.json())
    .then(response => response)
    .catch(error => error);
};

export default getData;
