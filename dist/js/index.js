// Globals
var g__Films = [], g__Users = [], g__Logged__User = undefined;

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

                // NEW
                $(("#filmCloseModalBtn"+ l__Film__Index)).click(function (event) {
                    // Clear settings form on modal close
                    document.getElementById(("commentForm" + l__Film__Index)).reset();
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

    // NEW
    $("#userSettings").click(function (event) {
        // Insert current user values into settings form
        if (g__Logged__User != undefined) document.getElementById("settingsName").value = g__Logged__User.name;
        if (g__Logged__User != undefined) document.getElementById("settingsEmail").value = g__Logged__User.email;
        if (g__Logged__User != undefined) document.getElementById("settingsPassword").value = g__Logged__User.description;
        if (g__Logged__User != undefined) document.getElementById("settingsPasswordConfirmation").value = g__Logged__User.description;
    });

    // NEW
    $("#settingsBtn").click(function (event) {
        // On user settings update
        event.preventDefault();
        console.log("settingsBtn")
        let l__Data = $("#settingsForm").serializeArray();
        console.log(l__Data);

        // If name is not empty, if email is valid, if passwords are equal and password is longer than 7
        if (l__Data[0].value != "" && l__Data[1].value.includes("@") && l__Data[2].value == l__Data[3].value && l__Data[2].value.length >= 8) {

            let l__Sign__In__User__Aux = g__Users.filter(l__Element => l__Element.identifier == g__Logged__User.identifier);

            // If this user exists, then update
            if (l__Sign__In__User__Aux.length == 1) {

                console.log(l__Sign__In__User__Aux);

                l__Sign__In__User__Aux[0].email = l__Data[1].value;
                l__Sign__In__User__Aux[0].description = l__Data[2].value
                l__Sign__In__User__Aux[0].name = l__Data[0].value

                console.log(l__Sign__In__User__Aux);

                NewAlert('success', "Cambios guardados correctamente", ' ', false, "Close", false, 1000);

                document.getElementById("settingsForm").reset();

                $("#userSettingsModal").modal("hide");
            } else {
                NewAlert('error', "Ha ocurrido un error inesperado", ' ', false, "Close", false, 1000);
            }

        } else {
            // Show errors
            if (!l__Data[1].value.includes("@") && l__Data[2].value != l__Data[3].value) {
                NewAlert('error', "Introduzca una contraseña válida e introduzca una contraseña válida", ' ', false, "Close", false, 1000);
            } else if (l__Data[2].value != l__Data[3].value) {
                NewAlert('error', "Introduzca una contraseña válida", ' ', false, "Close", false, 1000);
            } else if (!l__Data[1].value.includes("@")) {
                NewAlert('error', "Introduzca un correo válido", ' ', false, "Close", false, 1000);
            } else if (l__Data[2].value.length < 8) {
                NewAlert('error', "Introduzca una contraseña con 8 caracteres mínimo", ' ', false, "Close", false, 1000);
            } else {
                NewAlert('error', "Ha ocurrido un error inesperado", ' ', false, "Close", false, 1000);
            }
        }
    });

    // NEW
    $("#userLogOutBtn").click(function (event) {
        // Set logged user to undefined
        g__Logged__User = undefined;

        // Hide setting and log out button
        $("#userSettings").addClass("d-none");
        $("#userLogOutBtn").addClass("d-none");
        $("#userLogInBtn").removeClass("d-none");

        // Show login button and hide comments form
        $("#loginModalBtn").removeClass("d-none");
        for (let l__Film__Index in g__Films) {
            $(("#commentForm" + l__Film__Index)).addClass("d-none");
            $(("#commentFormBtn" + l__Film__Index)).addClass("d-none");
        }
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
        // On log in button click
        event.preventDefault();
        console.log("logInBtn")
        let l__Data = $("#logInForm").serializeArray();
        console.log(l__Data);

        // If name is not empty, if email is valid, if passwords are equal and password is longer than 7
        if (l__Data[0].value != "" && l__Data[1].value.includes("@") && l__Data[2].value == l__Data[3].value && l__Data[2].value.length >= 8) {

            let l__Sign__In__User__Aux = g__Users.filter(l__Element => l__Element.email == l__Data[1].value);

            // If this does not exists, then create
            if (l__Sign__In__User__Aux.length == 0) {
                g__Users.push({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "identifier": g__Users.length,
                    "email": l__Data[1].value,
                    "description": l__Data[2].value,
                    "name": l__Data[0].value
                });
                NewAlert('info', ("Bienvenido " + l__Data[0].value), ' ', false, "Close", false, 1000);

                console.log(g__Users)

                g__Logged__User = g__Users[g__Users.length - 1];

                // Reset sing in and log in forms
                document.getElementById("singInForm").reset();
                document.getElementById("logInForm").reset();

                // Show user settings and user log out at navbar, also hide user log in
                $("#userSettings").removeClass("d-none");
                $("#userLogOutBtn").removeClass("d-none");
                $("#userLogInBtn").addClass("d-none");

                // Hide log in button and show comment form
                $("#loginModalBtn").addClass("d-none");
                for (let l__Film__Index in g__Films) {
                    $(("#commentForm" + l__Film__Index)).removeClass("d-none");
                    $(("#commentFormBtn" + l__Film__Index)).removeClass("d-none");
                }
                

                $("#userModal").modal("hide")
            } else {
                // Show error
                NewAlert('error', "Ya existe una cuenta con este correo", ' ', false, "Close", false, 1000);
            }

        } else {
            // Show errors
            if (!l__Data[1].value.includes("@") && l__Data[2].value != l__Data[3].value) {
                NewAlert('error', "Introduzca una contraseña válida e introduzca una contraseña válida", ' ', false, "Close", false, 1000);
            } else if (l__Data[2].value != l__Data[3].value) {
                NewAlert('error', "Introduzca una contraseña válida", ' ', false, "Close", false, 1000);
            } else if (!l__Data[1].value.includes("@")) {
                NewAlert('error', "Introduzca un correo válido", ' ', false, "Close", false, 1000);
            } else if (l__Data[2].value.length < 8) {
                NewAlert('error', "Introduzca una contraseña con 8 caracteres mínimo", ' ', false, "Close", false, 1000);
            } else {
                NewAlert('error', "Ha ocurrido un error inesperado", ' ', false, "Close", false, 1000);
            }
        }
    });

    // NEW
    $("#singInBtn").click(function (event) {
        // On sign in button click
        event.preventDefault();
        console.log("singInBtn")
        let l__Data = $("#singInForm").serializeArray();
        console.log(l__Data);

        let l__Sign__In__User__Aux = g__Users.filter(l__Element => l__Element.email == l__Data[0].value);

        // If this user exists
        if (l__Sign__In__User__Aux.length == 1) {
            let l__Sign__In__User = l__Sign__In__User__Aux[0];
            // If wrong password
            if (l__Sign__In__User.description != l__Data[1].value) {
                NewAlert('error', "Contraseña incorrecta", ' ', false, "Close", false, 1000);
            } else {
                // Log in
                NewAlert('info', ("Bienvenido " + l__Sign__In__User.name), ' ', false, "Close", false, 1000);

                g__Logged__User = l__Sign__In__User;

                // Reset sing in and log in forms
                document.getElementById("singInForm").reset();
                document.getElementById("logInForm").reset();

                // Show user settings and user log out at navbar, also hide user log in
                $("#userSettings").removeClass("d-none");
                $("#userLogOutBtn").removeClass("d-none");
                $("#userLogInBtn").addClass("d-none");

                // Hide log in button and show comment form
                $("#loginModalBtn").addClass("d-none");

                for (let l__Film__Index in g__Films) {
                    $(("#commentForm" + l__Film__Index)).removeClass("d-none");
                    $(("#commentFormBtn" + l__Film__Index)).removeClass("d-none");
                }

                $("#userModal").modal("hide");
            }
        } else {
            // Show error
            NewAlert('error', "Usuario incorrecto", ' ', false, "Close", false, 1000);
        }
    });

    // NEW
    $("#flexCheckDefault").click(function (event) {
        // Hide or show password
        console.log("flexCheckDefault")
        let cb = document.getElementById('flexCheckDefault');
        let input = document.getElementById('signInPassword');
        console.log(cb.checked);
        if (cb.checked) {
            input.setAttribute("type", "text");
        } else {
            input.setAttribute("type", "password");
        }
    });

    // NEW
    $("#logInCheck").click(function (event) {
        // Hide or show password
        console.log("logInCheck")
        let cb = document.getElementById('logInCheck');
        let pass1 = document.getElementById('logInPassword');
        let pass2 = document.getElementById('logInPasswordConfirmation');
        console.log(cb.checked);
        if (cb.checked) {
            pass1.setAttribute("type", "text");
            pass2.setAttribute("type", "text");
        } else {
            pass1.setAttribute("type", "password");
            pass2.setAttribute("type", "password");
        }
    });

    // NEW
    $("#openCommentModal").click(function (event) {
        // On comment modal show, insert user name
        if (g__Logged__User != undefined) document.getElementById("inputNickname").value = g__Logged__User.name;
    });

    //setTimeout(() => { $("#loaderModal").modal("hide") }, 1500);

    ScrollReveal().reveal('.masthead');
    ScrollReveal().reveal('#films', { delay: 1000 });
    ScrollReveal().reveal('#team', { delay: 500 });
    ScrollReveal().reveal('#clients', { delay: 500 });
    ScrollReveal().reveal('.footer', { delay: 500 });
});