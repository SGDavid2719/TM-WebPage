// Globals
var g__Films;

$(document).ready(function () {

    $('#loaderModal').modal('toggle');

    fetch('./json/peliculas.json')
        .catch((error) => console.log("Hubo un error al cargar el JSON, número: " + error.status + ", " + error.statusText))
        .then((result) => result.json())
        .then((result) => {
            g__Films = result;

            // DELETE
            console.log(g__Films);

            generatePosters(g__Films);
            fillFilters();
        })
        .then(() => {
            // Iterate over each film
            for (let l__Film__Index in g__Films) {
                $(("#addComment" + l__Film__Index)).click(function () {
                    handleSubmit(("commentForm" + l__Film__Index), ("scrollviewContent" + l__Film__Index));
                });
            }
        });
    
    // Basic search button
	$("#basicSearchBtn").click(function () {
		handleBasicSearch();
	});

    // Advanced search button
	$("#advancedSearchBtn").click(function () {
		handleAdvancedSearch();
	});    

    setTimeout(() => { $("#loaderModal").modal("hide") }, 1500);
});