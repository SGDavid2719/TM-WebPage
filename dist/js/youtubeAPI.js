//variable for your API_KEY
const YOUTUBE_API_KEY = "AIzaSyCySkffNjgKxtuq-lavcQQ00v3TMWzMW2I";

function fetchYoutubeVideo(p__Search__URL, p__Container) {

    //url from YouTube docs modified for my random term and API key,
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${p__Search__URL}&key=${YOUTUBE_API_KEY}`;
    //fetch function following the aforementioned process
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data.items[0].id.videoId);
            //console.log above is to help access proper data in the JSON
            //object
            //set iframe source to proper URL (notice same dynamic strings 
            //used above)

            document.getElementById(p__Container).src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
        });
}