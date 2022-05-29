function borrar_claves_session() {
    sessionStorage.clear();
    obtener_claves_session();
}

function obtener_claves_session() {
    if (window.sessionStorage != null) {
        const sessionEmail = sessionStorage.getItem("email");

        console.log(sessionEmail);

        console.log(g__Users);

        const userAux = g__Users.filter(
            (element) => element.email == sessionEmail
        );

        console.log(userAux);

        if (userAux.length == 1) {
            g__Logged__User = userAux[0];

            NewAlert(
                "info",
                "Bienvenido " + g__Logged__User.name,
                " ",
                false,
                "Close",
                false,
                1000
            );

            // Show user settings and user log out at navbar, also hide user log in
            $("#userSettings").removeClass("d-none");
            $("#userLogOutBtn").removeClass("d-none");
            $("#userLogInBtn").addClass("d-none");

            enableAddComments();
        }
    }
}

function guardar_claves_session(email) {
    if (window.sessionStorage != null) {
        sessionStorage.setItem("email", email);
    }
}
