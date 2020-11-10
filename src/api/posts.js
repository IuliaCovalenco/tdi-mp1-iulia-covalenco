export const fetchPosts = () =>
  fetch(`https://api.magicthegathering.io/v1/cards`)
    .then(response => response.json())