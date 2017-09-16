const apiKey = 'ae2ca3e3280b4cfb96362eca9e6a681a';
const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`;

const getRandomNumber = () => {
    return Math.floor((Math.random() * 100) + 1);
};

export const getResource = (query) => {
    return fetch(`${apiUrl}&limit=1&offset=${getRandomNumber()}&rating=G&lang=en&q=${query}`)
        .then(response => response.json()
            .then(({data}) => data));
};
