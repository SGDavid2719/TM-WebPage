function handleSignIn() {
    // On sign in button click
    event.preventDefault();
    let l__Data = $("#singInForm").serializeArray();

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

            enableAddComments();

            $("#userModal").modal("hide");
        }
    } else {
        // Show error
        NewAlert('error', "Usuario incorrecto", ' ', false, "Close", false, 1000);
    }
}

function handleLogIn() {
    // On log in button click
    event.preventDefault();
    let l__Data = $("#logInForm").serializeArray();

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

            g__Logged__User = g__Users[g__Users.length - 1];

            // Reset sing in and log in forms
            document.getElementById("singInForm").reset();
            document.getElementById("logInForm").reset();

            // Show user settings and user log out at navbar, also hide user log in
            $("#userSettings").removeClass("d-none");
            $("#userLogOutBtn").removeClass("d-none");
            $("#userLogInBtn").addClass("d-none");

            enableAddComments();
            
            $("#userModal").modal("hide");
            
        } else {
            // Show error
            NewAlert('error', "Ya existe una cuenta con este correo", ' ', false, "Close", false, 1000);
        }

    } else {
        showPersonalDataError(l__Data);
    }
}

function handleLogOut() {
    NewAlert('info', ("Hasta la próxima " + g__Logged__User.name), ' ', false, "Close", false, 1000);

    // Set logged user to undefined
    g__Logged__User = undefined;

    // Hide setting and log out button
    $("#userSettings").addClass("d-none");
    $("#userLogOutBtn").addClass("d-none");
    $("#userLogInBtn").removeClass("d-none");

    disableAddComments();
}

// Insert current user values into settings form
function setSettings() {
    if (g__Logged__User != undefined) document.getElementById("settingsName").value = g__Logged__User.name;
    if (g__Logged__User != undefined) document.getElementById("settingsEmail").value = g__Logged__User.email;
    if (g__Logged__User != undefined) document.getElementById("settingsPassword").value = g__Logged__User.description;
    if (g__Logged__User != undefined) document.getElementById("settingsPasswordConfirmation").value = g__Logged__User.description;
}

function handleSettingsChange() {
    // On user settings update
    event.preventDefault();
    let l__Data = $("#settingsForm").serializeArray();

    // If name is not empty, if email is valid, if passwords are equal and password is longer than 7
    if (l__Data[0].value != "" && l__Data[1].value.includes("@") && l__Data[2].value == l__Data[3].value && l__Data[2].value.length >= 8) {

        let l__Sign__In__User__Aux = g__Users.filter(l__Element => l__Element.identifier == g__Logged__User.identifier);

        // If this user exists, then update
        if (l__Sign__In__User__Aux.length == 1) {

            let previousUserName = g__Logged__User.name;

            l__Sign__In__User__Aux[0].email = l__Data[1].value;
            l__Sign__In__User__Aux[0].description = l__Data[2].value;
            l__Sign__In__User__Aux[0].name = l__Data[0].value;

            NewAlert('success', "Cambios guardados correctamente", ' ', false, "Close", false, 1000);

            document.getElementById("settingsForm").reset();

            $("#userSettingsModal").modal("hide");

            // Hide log in button and show comment form
            for (let l__Film__Index in g__Films) {
                if (g__Logged__User != undefined) document.getElementById(("inputNickname" + l__Film__Index)).value = g__Logged__User.name;

                let commentsArray = g__Films[l__Film__Index].comment.filter(comment => comment.author.name == previousUserName);

                for (let commentIndex in commentsArray) {
                    commentsArray[commentIndex].author.name = l__Data[0].value;
                }

                const lCommentSection = document.getElementById(("scrollviewContent" + l__Film__Index))

                while (lCommentSection.firstChild) {
                    lCommentSection.removeChild(lCommentSection.lastChild);
                }

                appendComments(lCommentSection, g__Films[l__Film__Index].comment, l__Film__Index);
            }
        } else {
            NewAlert('error', "Ha ocurrido un error inesperado", ' ', false, "Close", false, 1000);
        }

    } else {
        showPersonalDataError(l__Data);
    }
}

function onLogInCheckBox() {
    // Hide or show password
    let cb = document.getElementById('logInCheck');
    let pass1 = document.getElementById('logInPassword');
    let pass2 = document.getElementById('logInPasswordConfirmation');
    if (cb.checked) {
        pass1.setAttribute("type", "text");
        pass2.setAttribute("type", "text");
    } else {
        pass1.setAttribute("type", "password");
        pass2.setAttribute("type", "password");
    }
}

function onSignInCheckBox() {
    // Hide or show password
    let cb = document.getElementById('signInCheck');
    let input = document.getElementById('signInPassword');
    console.log(cb.checked);
    if (cb.checked) {
        input.setAttribute("type", "text");
    } else {
        input.setAttribute("type", "password");
    }
}

function showPersonalDataError(p__Data) {
    // Destructuring
    let [l__Email, l__Password, l__Confirm__Password] = p__Data;
    // Show errors
    if (!l__Email.value.includes("@") && l__Password.value != l__Confirm__Password.value) {
        NewAlert('error', "Introduzca un correo válido e introduzca una contraseña válida", ' ', false, "Close", false, 1000);
    } else if (l__Password.value != l__Confirm__Password.value) {
        NewAlert('error', "Introduzca una contraseña válida", ' ', false, "Close", false, 1000);
    } else if (!l__Email.value.includes("@")) {
        NewAlert('error', "Introduzca un correo válido", ' ', false, "Close", false, 1000);
    } else if (l__Password.value.length < 8) {
        NewAlert('error', "Introduzca una contraseña con 8 caracteres mínimo", ' ', false, "Close", false, 1000);
    } else {
        NewAlert('error', "Ha ocurrido un error inesperado", ' ', false, "Close", false, 1000);
    }
}

function enableAddComments() {

    let l__Showing__Films = (g__Filtered__Films.length > 0) ? g__Filtered__Films : g__Films;

    // Hide log in button and show comment form
    for (let l__Film__Index in l__Showing__Films) {
        $(("#loginModalBtn" + l__Film__Index)).addClass("d-none");
        $(("#commentForm" + l__Film__Index)).removeClass("d-none");
        $(("#commentFormBtn" + l__Film__Index)).removeClass("d-none");
        if (g__Logged__User != undefined) document.getElementById(("inputNickname" + l__Film__Index)).value = g__Logged__User.name;

        const lCommentSection = document.getElementById(("scrollviewContent" + l__Film__Index))
        while (lCommentSection.firstChild) {
            lCommentSection.removeChild(lCommentSection.lastChild);
        }
        appendComments(lCommentSection, l__Showing__Films[l__Film__Index].comment, l__Film__Index);
    }
}

function disableAddComments() {
    // Show login button and hide comments form

    let l__Showing__Films = (g__Filtered__Films.length > 0) ? g__Filtered__Films : g__Films;
        
    for (let l__Film__Index in l__Showing__Films) {
        $(("#loginModalBtn" + l__Film__Index)).removeClass("d-none");
        $(("#commentForm" + l__Film__Index)).addClass("d-none");
        $(("#commentFormBtn" + l__Film__Index)).addClass("d-none");

        const lCommentSection = document.getElementById(("scrollviewContent" + l__Film__Index))
        while (lCommentSection.firstChild) {
            lCommentSection.removeChild(lCommentSection.lastChild);
        }
        appendComments(lCommentSection, l__Showing__Films[l__Film__Index].comment, l__Film__Index);
    }
}