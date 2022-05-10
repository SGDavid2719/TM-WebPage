function handleSubmit (p__Form__Container, p__Scrollview__Container) {
    let l__Data = $(("#" + p__Form__Container)).serializeArray();

    if (l__Data[0].value != "" && l__Data[2].value != "") {

        let l__Film__Index = p__Form__Container.split("commentForm")[1];
        let l__Number__Of__Comments = g__Films[l__Film__Index].comment.length;

        let l__Cards = document.getElementById(p__Scrollview__Container);

        let l__Card = document.createElement("div");
        l__Card.setAttribute("class", "card border-dark mx-3 mx-lg-4 pb-3 mb-3");

        // NEW
        let l__Card__Header = document.createElement("div");
        l__Card__Header.setAttribute("class", "card-header fw-bold row m-0");

        // NEW
        let l__Card__Header__Nickname = document.createElement("div");
        l__Card__Header__Nickname.textContent = l__Data[0].value;
        l__Card__Header__Nickname.setAttribute("class", "col-6 p-2");

        // NEW
        l__Card__Header.appendChild(l__Card__Header__Nickname);

        // NEW
        let l__Card__Buttons = document.createElement("div");
        l__Card__Buttons.setAttribute("class", "col-6 d-flex justify-content-end");

        // NEW
        let l__Card__Edit__Button = document.createElement("button");
        l__Card__Edit__Button.setAttribute("id", ("edit" + l__Number__Of__Comments));
        l__Card__Edit__Button.setAttribute("class", "btn border-0");

        // NEW
        let l__Card__Edit__Button__Icon = document.createElement("i");
        l__Card__Edit__Button__Icon.setAttribute("class", "fa-solid fa-pencil");

        // NEW
        let l__Card__Delete__Button = document.createElement("button");
        l__Card__Delete__Button.setAttribute("id", ("delete" + l__Number__Of__Comments));
        l__Card__Delete__Button.setAttribute("class", "btn border-0");

        // NEW
        let l__Card__Delete__Button__Icon = document.createElement("i");
        l__Card__Delete__Button__Icon.setAttribute("class", "fa-solid fa-trash");

        // NEW
        l__Card__Edit__Button.appendChild(l__Card__Edit__Button__Icon);
        l__Card__Delete__Button.appendChild(l__Card__Delete__Button__Icon);
        l__Card__Buttons.appendChild(l__Card__Edit__Button);
        l__Card__Buttons.appendChild(l__Card__Delete__Button);
        l__Card__Header.appendChild(l__Card__Buttons);

        let l__Card__Body = document.createElement("div");
        l__Card__Body.setAttribute("class", "card-body text-dark");

        let l__Card__Body__Title = document.createElement("h5");
        l__Card__Body__Title.textContent = l__Data[1].value + "/5";
        l__Card__Body__Title.setAttribute("class", "card-title");

        let l__Card__Body__Text = document.createElement("p");
        l__Card__Body__Text.textContent = l__Data[2].value;
        l__Card__Body__Text.setAttribute("class", "card-text");

        l__Card__Body.appendChild(l__Card__Body__Title);
        l__Card__Body.appendChild(l__Card__Body__Text);

        l__Card.appendChild(l__Card__Header);
        l__Card.appendChild(l__Card__Body);

        l__Cards.appendChild(l__Card);

        document.getElementById(p__Form__Container).reset();

        // NEW
        $(("#edit" + l__Number__Of__Comments)).click(function (event) {
            // On comment modal show, insert user name
            document.getElementById(("inputRate" + l__Film__Index)).value = 5;
            document.getElementById(("inputComment" + l__Film__Index)).value = "funciona el editar";
        });

        // NEW
        $(("#delete" + l__Number__Of__Comments)).click(function (event) {
            // On comment modal show, insert user name
            NewAlert('warning', "¿Quieres borrar este comentario?", ' ', true, "Delete comment", true);
        });

        let l__Comment = { "@type": "text", "author": { "@type:": "Person", "name": l__Data[0].value}, "contentRating": {"@type": "Rating", "name": l__Data[1].value }, "name": l__Data[2].value }; 

        g__Films[l__Film__Index].comment.push(l__Comment);

        // NEW
        if (g__Logged__User != undefined) document.getElementById(("inputNickname" + l__Film__Index)).value = g__Logged__User.name;

        NewAlert('info', "Comentario añadido", ' ', false, "Close", false, 1000);

       
    } else {
        NewAlert('error', "Rellene todos los campos", ' ', false, "Close", false, 1000);
    }
}