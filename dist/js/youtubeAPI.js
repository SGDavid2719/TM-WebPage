//variable for your API_KEY
const YOUTUBE_API_KEY = "AIzaSyCsNflHvElv6S2sfImDxGe58p3VSKvcZqo";

function fetchYoutubeVideo(p__Search__URL, p__Container) {

    // url from YouTube docs modified for my criteria and API key,
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${p__Search__URL}&key=${YOUTUBE_API_KEY}`;
    // fetch video data
    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.items != undefined && data.items.length > 0) document.getElementById(p__Container).src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
            else console.warn(data);
        });
}