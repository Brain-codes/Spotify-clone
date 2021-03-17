export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri ="http://localhost:3000/";
const clientId = "3a25da34c51f4d2d825fbfe89c0050bc";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
    
]

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initialValue,currentValue) =>{
        let parts = currentValue.split('=');
        initialValue[parts[0]] =decodeURIComponent(parts[1]);
        return initialValue
    },{}
    )
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`