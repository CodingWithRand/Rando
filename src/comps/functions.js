import displayTheme from './theme.json'

function async_delay(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); };
function sync_delay(ms) {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}
  
function retrieve_image(name, exception) {
    if (exception) return process.env.PUBLIC_URL + `/imgs/backend-images/${name}`;
    if (displayTheme['display-theme'] === 'light'){
        return process.env.PUBLIC_URL + `/imgs/backend-images/light-${name}`;
    }else if (displayTheme['display-theme'] === 'dark'){
        return process.env.PUBLIC_URL + `/imgs/backend-images/dark-${name}`;
    }
};

const functions = {
    async_delay,
    sync_delay,
    retrieve_image
}

export default functions