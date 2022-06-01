// Globals
var g__Films = [],
    g__Users = [],
    g__Tweets = [],
    g__Logged__User = undefined,
    g__Recips = [];

$(document).ready(function () {
    $("#loaderModal").modal("toggle");

    fetch("./json/tweets.json")
        .catch((error) =>
            console.log(
                "Hubo un error al cargar el JSON, número: " +
                    error.status +
                    ", " +
                    error.statusText
            )
        )
        .then((result) => result.json())
        .then((result) => {
            g__Tweets = result;

            const head = document.querySelector("head");
            const ld_json = document.createElement("script");
            ld_json.setAttribute("type", "application/ld+json");
            ld_json.innerHTML = JSON.stringify(g__Tweets);
            head.appendChild(ld_json);
        });

    fetch("./json/usuarios.json")
        .catch((error) =>
            console.log(
                "Hubo un error al cargar el JSON, número: " +
                    error.status +
                    ", " +
                    error.statusText
            )
        )
        .then((result) => result.json())
        .then((result) => {
            g__Users = result;
        });

    fetch("./json/peliculas.json")
        .catch((error) =>
            console.log(
                "Hubo un error al cargar el JSON, número: " +
                    error.status +
                    ", " +
                    error.statusText
            )
        )
        .then((result) => result.json())
        .then(async (result) => {
            g__Films = result;

            const head = document.querySelector("head");
            const ld_json = document.createElement("script");
            ld_json.setAttribute("type", "application/ld+json");
            ld_json.innerHTML = JSON.stringify(g__Films);
            head.appendChild(ld_json);

            await generatePosters(g__Films);
            fillFilters();
            enablePostersButtons(g__Films);

            obtener_claves_session();

            setTimeout(() => {
                $("#loaderModal").modal("hide");
            }, 1000);
        })
        .then(() => twttr.widgets.load());

    fetch("https://gastronomiaesp.000webhostapp.com/JSON/gastronomia.json")
        .catch((error) =>
            console.log(
                "Hubo un error al cargar el JSON, número: " +
                    error.status +
                    ", " +
                    error.statusText
            )
        )
        .then((result) => result.json())
        .then((result) => {
            g__Recips = result.gastronomia;

            const head = document.querySelector("head");
            const ld_json = document.createElement("script");
            ld_json.setAttribute("type", "application/ld+json");
            ld_json.innerHTML = JSON.stringify(g__Recips);
            head.appendChild(ld_json);

            const slicedArray = g__Recips.slice(0, 5);

            createDishesCarousel(slicedArray);
        });

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
        if (g__Logged__User != undefined)
            document.getElementById("inputNickname").value =
                g__Logged__User.name;
    });

    ScrollReveal().reveal(".masthead");
    ScrollReveal().reveal("#films", { delay: 1000 });
    ScrollReveal().reveal("#team", { delay: 500 });
    ScrollReveal().reveal("#clients", { delay: 500 });
    ScrollReveal().reveal(".footer", { delay: 500 });
});
