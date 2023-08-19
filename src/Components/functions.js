import displayTheme from './theme.json'

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
  
function retrieve_image(name, exception) {
    if (exception) return process.env.PUBLIC_URL + `/imgs/backend-images/${name}`;
    if (displayTheme['display-theme'] === 'light'){
        return process.env.PUBLIC_URL + `/imgs/backend-images/light-${name}`;
    }else if (displayTheme['display-theme'] === 'dark'){
        return process.env.PUBLIC_URL + `/imgs/backend-images/dark-${name}`;
    }
};

const functions = {
    delay,
    retrieve_image
}

export default functions