function fetchWikipediaInfo(p__Search__Term, p__Container) {
    //url from YouTube docs modified for my random term and API key,
    const WIKIPEDIA_URL = `https://en.wikipedia.org/w/api.php?action=openseach&format=json&search=${p__Search__Term}`;

    fetch(WIKIPEDIA_URL)
        .then(response => response.json())
        .then(data => {
            //console.log(data.items[0].id.videoId);
            //console.log above is to help access proper data in the JSON
            //object
            //set iframe source to proper URL (notice same dynamic strings 
            //used above)

            console.log(data)
        });
}
