export const fetchAPI = (url) => {
  return fetch(url)
    .then( (res) => {
      return res.json();
    })
    .catch( (err) => {
      throw new Error('Invalid resp');
    })
    .finally( () => {
      console.log('It is over!');
    } )
}