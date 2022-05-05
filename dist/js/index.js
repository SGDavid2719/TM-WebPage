// Globals
var g__Films;

$(document).ready(function () {
    fetch('./json/peliculas.json')
        .catch((error) => console.log("Hubo un error al cargar el JSON, número: " + error.status + ", " + error.statusText))
        .then((result) => result.json())
        .then((result) => {
            g__Films = result;

            // DELETE
            console.log(g__Films);

            generatePosters(g__Films);
            fillFilters();
        });
    
    // Basic search button
	$("#basicSearchBtn").click(function () {
		handleBasicSearch();
	});

    // Advanced search button
	$("#advancedSearchBtn").click(function () {
		handleAdvancedSearch();
	});
});