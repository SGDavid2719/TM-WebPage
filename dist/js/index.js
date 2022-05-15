// Globals
var g__Films = [], g__Users = [], g__Logged__User = undefined;

$(document).ready(function () {

    fetchWikipediaInfo("James Cameron");

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
            enablePostersButtons(g__Films);
        });   
        
    fetch('./json/usuarios.json')
        .catch((error) => console.log("Hubo un error al cargar el JSON, número: " + error.status + ", " + error.statusText))
        .then((result) => result.json())
        .then((result) =>  g__Users = result);
    
    // Basic search button
	$("#basicSearchBtn").click(function () {
		handleBasicSearch();
	});

    // Advanced search button
	$("#advancedSearchBtn").click(function () {
		handleAdvancedSearch();
	});

    // NEW
    $("#userSettings").click(function (event) {
        setSettings();
    });

    // NEW
    $("#settingsBtn").click(function (event) {
        handleSettingsChange();
    });

    // NEW
    $("#userLogOutBtn").click(function (event) {
        handleLogOut();
    });

    // NEW
    $("#userSettingsModalCloseBtn").click(function (event) {
        // Clear settings form on modal close
        document.getElementById("settingsForm").reset();
    });

    // NEW
    $("#userModalCloseBtn").click(function (event) {
        // Clear sign in and log in form on modal close
        document.getElementById("singInForm").reset();
        document.getElementById("logInForm").reset();
    });

    // NEW
    $("#logInBtn").click(function (event) {
        handleLogIn();
    });

    // NEW
    $("#singInBtn").click(function (event) {
        handleSignIn();
    });

    // NEW
    $("#signInCheck").click(function (event) {
        onSignInCheckBox();
    });

    // NEW
    $("#logInCheck").click(function (event) {
        onLogInCheckBox();
    });

    // NEW
    $("#openCommentModal").click(function (event) {
        // On comment modal show, insert user name
        if (g__Logged__User != undefined) document.getElementById("inputNickname").value = g__Logged__User.name;
    });

    //setTimeout(() => { $("#loaderModal").modal("hide") }, 4500);

    ScrollReveal().reveal('.masthead');
    ScrollReveal().reveal('#films', { delay: 1000 });
    ScrollReveal().reveal('#team', { delay: 500 });
    ScrollReveal().reveal('#clients', { delay: 500 });
    ScrollReveal().reveal('.footer', { delay: 500 });
});