async function fetchWikipediaInfo(p__Search__Term) {
    //url from YouTube docs modified for my random term and API key,
    const WIKIPEDIA_URL = `https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=${p__Search__Term}`;

    try {
        let data = await fetch(WIKIPEDIA_URL).then(response => response.json());

        if (data.query.pages != undefined) {
            data = data.query.pages;
            let pageID = Object.keys(data)[0];

            return data[pageID].extract;
        } else {
            return " ";
        }

    } catch (error) {
        console.error(error);
    }

    return " ";
}
