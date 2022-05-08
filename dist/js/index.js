// Globals
var g__Films = [], g__Users = [];

$(document).ready(function () {

    //$('#loaderModal').modal('toggle');

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

    fetch('./json/usuarios.json')
        .catch((error) => console.log("Hubo un error al cargar el JSON, número: " + error.status + ", " + error.statusText))
        .then((result) => result.json())
        .then((result) => {
            g__Users = result;

            // DELETE
            console.log(g__Users);

        })
    
    // Basic search button
	$("#basicSearchBtn").click(function () {
		handleBasicSearch();
	});

    // Advanced search button
	$("#advancedSearchBtn").click(function () {
		handleAdvancedSearch();
	});

    // Sign in button
	$("#signInFormBtn").click(function () {
		handleSignIn();
	});

    // Log in button
	$("#loginFormBtn").click(function () {
		handleLogIn();
	});

    //setTimeout(() => { $("#loaderModal").modal("hide") }, 1500);

    ScrollReveal().reveal('.masthead');
    ScrollReveal().reveal('#films', { delay: 1000 });
    ScrollReveal().reveal('#team', { delay: 500 });
    ScrollReveal().reveal('#clients', { delay: 500 });
    ScrollReveal().reveal('.footer', { delay: 500 });
});