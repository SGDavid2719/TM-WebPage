function handleSubmit (p__Form__Container, p__Scrollview__Container) {
    let l__Data = $(("#" + p__Form__Container)).serializeArray();

    if (l__Data[0].value != "" && l__Data[2].value != "") {
        let l__Cards = document.getElementById(p__Scrollview__Container);

        let l__Card = document.createElement("div");
        l__Card.setAttribute("class", "card border-dark mx-3 mx-lg-4 pb-3 mb-3");

        let l__Card__Header = document.createElement("div");
        l__Card__Header.textContent = l__Data[0].value;
        l__Card__Header.setAttribute("class", "card-header");

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

        NewAlert('info', "Comentario añadido", ' ', false, "Close", false, 1000);
    } else {
        NewAlert('error', "Rellene todos los campos", ' ', false, "Close", false, 1000);
    }
}